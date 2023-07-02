import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import path from "path";

import Deck from "./models/Deck";
import deckRouter from "./routes/deckRoutes";

config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use(cors({ origin: "*" }));
app.use("/decks", deckRouter);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI!).then(() => {
	console.log("connected to db");
	console.log(`listening on port ${port}`);
	app.listen(port);
});
