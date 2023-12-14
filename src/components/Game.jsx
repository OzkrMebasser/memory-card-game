// Game.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/actions/themeActions";
import Card from "./Card";
import { cardsData } from "../assets/cards";
import "../App.css";

const totalPairs = {
  Easy: 4, // 8 cartas
  Medium: 8, // 16 cartas
  Hard: 15, // 30 cartas
};

function Game() {
  const [cardsState, setCardsState] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondClick, setSecondClick] = useState(false);
  const [wait, setWait] = useState(false);
  const [successAttempts, setSuccessAttempts] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState("Easy");
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const cardMatches = (card1, card2) => {
    return card1.name === card2.name;
  };

  const checker = async (card) => {
    if (cardMatches(card, firstCard)) {
      card["passed"] = true;
      firstCard["passed"] = true;
      changeCardStatusHandler(card);
      changeCardStatusHandler(firstCard);
    } else {
      setWait(true);
      setTimeout(() => {
        changeCardStatusHandler(card);
        changeCardStatusHandler(firstCard);
        setFirstCard(null);
        setWait(false);
        setFailedAttempts((attempts) => attempts + 1);
        showAlert();
      }, 100);
    }
  };

  const showAlert = () => {
    alert(
      `Puntaje: ${successAttempts} de ${totalPairs[selectedLevel]}. Intentos fallidos: ${failedAttempts}`
    );
  };

  const showCompletionAlert = () => {
    alert(`¡Felicidades! Has completado todos los puntos.`);
  };

  const changeCardStatusHandler = async (clickedCard) => {
    if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
    const index = cardsState.findIndex((card) => card.id === clickedCard.id);
    const newState = [...cardsState];
    newState.splice(index, 1, clickedCard);
    await setCardsState(newState);
  };

  const handleClick = async (e, clickedCard) => {
    if (wait) {
      return;
    }
    if (!secondClick) {
      await setFirstCard(clickedCard);
      await setSecondClick(true);
      changeCardStatusHandler(clickedCard);
    } else {
      await setSecondClick(false);
      changeCardStatusHandler(clickedCard);
      checker(clickedCard);
      if (cardMatches(clickedCard, firstCard)) {
        setSuccessAttempts((count) => count + 1);
      }
    }
  };

  useEffect(() => {
    const selectedCards = cardsData.slice(0, totalPairs[selectedLevel] * 2);
    const shuffledCards = selectedCards.sort(() => Math.random() - 0.5);
    setCardsState(shuffledCards);
  }, [selectedLevel]);

  useEffect(() => {
    if (wait) {
      const timeoutId = setTimeout(() => {
        setWait(false);
        setFirstCard(null);
      }, 100);

      return () => clearTimeout(timeoutId);
    }

    if (successAttempts === totalPairs[selectedLevel]) {
      showCompletionAlert();
    }
  }, [wait, successAttempts, selectedLevel]);

  return (
    <div id="theme" className={`${currentTheme}`}>
      <div className="container">
        <div className="theme-selector select-dropdown">
          <label htmlFor="handleToggleTheme">Selecciona el tema: </label>
          <select
            id="handleToggleTheme"
            onChange={handleToggleTheme}
            value={currentTheme}
          >
            <option value="light-theme">Tema Claro</option>
            <option value="dark-theme">Tema Oscuro</option>
            <option value="colorful-theme">Tema Colorido</option>
          </select>
        </div>

        <div className="counter">
          <p>Aciertos: {successAttempts}</p>
          <p>Intentos fallidos: {failedAttempts}</p>
        </div>

        <div className="level-selector select-dropdown">
          <label htmlFor="difficulty">Selecciona el nivel:</label>
          <select
            id="difficulty"
            onChange={(e) => setSelectedLevel(e.target.value)}
            value={selectedLevel}
          >
            <option value="Easy">Fácil</option>
            <option value="Medium">Medio</option>
            <option value="Hard">Difícil</option>
          </select>
        </div>
      </div>

      <section className="memory-game">
        {cardsState?.map((card) => (
          <Card key={card.id} card={card} onClick={(e) => handleClick(e, card)} />
        ))}
      </section>
    </div>
  );
}

export default Game;
