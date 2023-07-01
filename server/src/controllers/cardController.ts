import Deck from "../models/Deck";
import { Request, Response } from "express";

export const createCardForDeck = async (req: Request, res: Response) => {
	const { deckId } = req.params;
	const deck = await Deck.findById(deckId);
	const card = req.body.text.trim();
	deck?.cards.push(card);
	await deck?.save();
	res.json(deck);
};

export const deleteCardForDeck = async (req: Request, res: Response) => {
	const { deckId, index } = req.params;
	const deck = await Deck.findById(deckId);
	deck?.cards.splice(parseInt(index), 1);
	await deck?.save();
	res.json(deck);
};
