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
      name: "Airbus",
      logo: "https://i.imgur.com/PLfKZrR.png",
      price: 114,
      nextPrice: 120,
      market: "EURONEXT PARIS",
      sector: "Industrie",
    },
    {
      id: 2,
      name: "Sanofi",
      logo: "https://i.imgur.com/AliKjXr.png",
      price: 87,
      nextPrice: 90,
      market: "EURONEXT PARIS",
      sector: "Santé",
    },
    {
      id: 3,
      name: "Deutsche Telekom",
      logo: "https://i.imgur.com/hHLBfKt.png",
      price: 19,
      nextPrice: 15,
      market: "DEUTSCHE BOERSE AG",
      sector: "Télécom",
    },
    {
      id: 4,
      name: "Unilever",
      logo: "https://i.imgur.com/kQnGM6p.png",
      price: 410,
      nextPrice: 400,
      market: "LONDON STOCK EXCHANGE",
      sector: "Consommation de base",
    },
    {
      id: 5,
      name: "Repsol",
      logo: "https://i.imgur.com/w59TeaS.png",
      price: 14,
      nextPrice: 40,
      market: "BOLSA DE MADRID",
      sector: "Énergie",
    },
  ]);
});

module.exports = app;
