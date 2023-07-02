"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeck = exports.deleteDeck = exports.createDeck = exports.getAllDecks = void 0;
const Deck_1 = __importDefault(require("../models/Deck"));
const getAllDecks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decks = yield Deck_1.default.find({});
    res.json(decks);
});
exports.getAllDecks = getAllDecks;
const createDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDeck = new Deck_1.default(req.body);
    const createdDeck = yield newDeck.save();
    res.json(createdDeck);
});
exports.createDeck = createDeck;
const deleteDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedDeck = yield Deck_1.default.findByIdAndDelete(req.params.deckId);
    res.json({ message: "Successfully deleted the deck", deletedDeck });
});
exports.deleteDeck = deleteDeck;
const getDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deck = yield Deck_1.default.findById(req.params.deckId);
    res.json(deck);
});
exports.getDeck = getDeck;
