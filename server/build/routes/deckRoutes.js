"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deckController_1 = require("../controllers/deckController");
const cardController_1 = require("../controllers/cardController");
const router = express_1.default.Router();
router.get("/", deckController_1.getAllDecks);
router.post("/", deckController_1.createDeck);
router.get("/:deckId", deckController_1.getDeck);
router.delete("/:deckId", deckController_1.deleteDeck);
router.post("/:deckId/cards", cardController_1.createCardForDeck);
router.delete("/:deckId/cards/:index", cardController_1.deleteCardForDeck);
exports.default = router;
