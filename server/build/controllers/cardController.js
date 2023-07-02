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
exports.deleteCardForDeck = exports.createCardForDeck = void 0;
const Deck_1 = __importDefault(require("../models/Deck"));
const createCardForDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { deckId } = req.params;
    const deck = yield Deck_1.default.findById(deckId);
    const card = req.body.text.trim();
    deck === null || deck === void 0 ? void 0 : deck.cards.push(card);
    yield (deck === null || deck === void 0 ? void 0 : deck.save());
    res.json(deck);
});
exports.createCardForDeck = createCardForDeck;
const deleteCardForDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { deckId, index } = req.params;
    const deck = yield Deck_1.default.findById(deckId);
    deck === null || deck === void 0 ? void 0 : deck.cards.splice(parseInt(index), 1);
    yield (deck === null || deck === void 0 ? void 0 : deck.save());
    res.json(deck);
});
exports.deleteCardForDeck = deleteCardForDeck;
