"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const deckSchema = new mongoose_1.default.Schema({
    title: String,
    cards: [String],
});
const Deck = mongoose_1.default.model("Deck", deckSchema);
exports.default = Deck;
