import Deck from "../models/Deck";
import { Request, Response } from "express";

export const getAllDecks = async (req: Request, res: Response) => {
	const decks = await Deck.find({});
	console.log(req.url);
	res.json(decks);
};

export const createDeck = async (req: Request, res: Response) => {
	const newDeck = new Deck(req.body);
	const createdDeck = await newDeck.save();
	res.json(createdDeck);
};

export const deleteDeck = async (req: Request, res: Response) => {
	const deletedDeck = await Deck.findByIdAndDelete(req.params.deckId);
	res.json({ message: "Successfully deleted the deck", deletedDeck });
};

export const getDeck = async (req: Request, res: Response) => {
	const deck = await Deck.findById(req.params.deckId);
	res.json(deck);
};
