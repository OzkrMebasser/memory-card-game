export const toggleTheme = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_THEME' });

    // Obtén el tema actualizado después de cambiarlo
    const updatedTheme = getState().theme.currentTheme;
    // console.log('Current Theme desde actions toggleTheme "updatedTheme():', updatedTheme);
  };
};