import html5 from "./images/html5.svg";
import javascript from "./images/javascript.svg";
import mongodb from "./images/mongodb.svg";
import mysql from "./images/mysql.svg";
import nextjs from "./images/nextjs.svg";
import nodejs from "./images/nodejs.svg";
import postgresql from "./images/postgresql.svg";
import python from "./images/python.svg";
import react from "./images/react.svg";
import sqlite from "./images/sqlite.svg";
import tailwind from "./images/tailwind.svg";
import vue from "./images/vue.svg";
import bootstrap from "./images/bootstrap.svg";
import css3 from "./images/css3.svg";
import aws from "./images/aws.svg";


const cards = [
  { id: 1, name: "html5", image: html5 },
  { id: 2, name: "html5", image: html5 },
  { id: 3, name: "javascript", image: javascript },
  { id: 4, name: "javascript", image: javascript },
  { id: 5, name: "mongodb", image: mongodb },
  { id: 6, name: "mongodb", image: mongodb },
  { id: 7, name: "mysql", image: mysql },
  { id: 8, name: "mysql", image: mysql },
  { id: 9, name: "nextjs", image: nextjs },
  { id: 10, name: "nextjs", image: nextjs },
  { id: 11, name: "nodejs", image: nodejs },
  { id: 12, name: "nodejs", image: nodejs },
  { id: 13, name: "postgresql", image: postgresql },
  { id: 14, name: "postgresql", image: postgresql },
  { id: 15, name: "python", image: python },
  { id: 16, name: "python", image: python },
  { id: 17, name: "react", image: react },
  { id: 18, name: "react", image: react },
  { id: 19, name: "sqlite", image: sqlite },
  { id: 20, name: "sqlite", image: sqlite },
  { id: 21, name: "tailwind", image: tailwind },
  { id: 22, name: "tailwind", image: tailwind },
  { id: 23, name: "vue", image: vue },
  { id: 24, name: "vue", image: vue },
  { id: 25, name: "bootstrap", image: bootstrap },
  { id: 26, name: "bootstrap", image: bootstrap },
  { id: 27, name: "css3", image: css3 },
  { id: 28, name: "css3", image: css3 },
  { id: 29, name: "aws", image: aws },
  { id: 30, name: "aws", image: aws },
];



export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 30),
  isFlipped: false,
}));
