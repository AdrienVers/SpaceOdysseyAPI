const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Airbus",
      imageUrl: "https://i.imgur.com/PLfKZrR.png",
      price: 114,
    },
    {
      id: 2,
      title: "Sanofi",
      imageUrl: "https://i.imgur.com/AliKjXr.png",
      price: 87,
    },
    {
      id: 3,
      title: "Deutsche Telekom",
      imageUrl: "https://i.imgur.com/hHLBfKt.png",
      price: 19,
    },
    {
      id: 4,
      title: "Unilever",
      imageUrl: "https://i.imgur.com/kQnGM6p.png",
      price: 410,
    },
    {
      id: 5,
      title: "Repsol",
      imageUrl: "https://i.imgur.com/w59TeaS.png",
      price: 14,
    },
  ]);
});

module.exports = app;
