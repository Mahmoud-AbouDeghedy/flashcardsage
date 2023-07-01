import mongoose from "mongoose";
import express, { Request, Response } from "express";

import {
	getAllDecks,
	createDeck,
	deleteDeck,
	getDeck,
} from "../controllers/deckController";
import {
	createCardForDeck,
	deleteCardForDeck,
} from "../controllers/cardController";

const router = express.Router();

router.get("/", getAllDecks);
router.post("/", createDeck);
router.get("/:deckId", getDeck);
router.delete("/:deckId", deleteDeck);
router.post("/:deckId/cards", createCardForDeck);
router.delete("/:deckId/cards/:index", deleteCardForDeck);

export default router;
