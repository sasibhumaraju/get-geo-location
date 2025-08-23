// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let last = null; // in-memory for demo
app.post("/save-location", (req, res) => {
  last = { ...req.body, receivedAt: Date.now() };
  console.log("Location:", last);
  res.sendStatus(200);
});

app.get("/last-location", (req, res) => {
  res.json(last || {});
});

app.listen(3000, () => console.log("API on http://localhost:3000"));
