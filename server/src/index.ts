import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";

import Deck from "./models/Deck";

config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/decks", async (req: Request, res: Response) => {
	const newDeck = new Deck(req.body);
	const createdDeck = await newDeck.save();
	res.json(createdDeck);
});

app.get("/decks", async (req: Request, res: Response) => {
	const decks = await Deck.find({});
	res.json(decks);
});

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI!).then(() => {
	console.log("connected to db");
	console.log(`listening on port ${port}`);
	app.listen(port);
});
