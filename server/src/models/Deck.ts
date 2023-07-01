import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
	title: String,
	cards: [String],
});

const Deck = mongoose.model("Deck", deckSchema);
export default Deck;
