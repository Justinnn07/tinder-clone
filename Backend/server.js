import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";

// App Config

const app = express();
const port = process.env.PORT || 3011;
const connection_url =
  "mongodb+srv://admin:bI7qWLm56G02JZL2@cluster0.q7l5u.mongodb.net/tinderdb?retryWrites=true&w=majority";

// DB config

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints

app.get("/", (req, res) => res.status(200).send("HELLO KIRAN"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//   app.get("/tinder/cards", (req, res))

// Listener

app.listen(port, () => console.log(`listening on ${port}`));

// bI7qWLm56G02JZL2
