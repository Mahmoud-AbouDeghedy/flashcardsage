import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
	title: String,
});

const Deck = mongoose.model("Deck", deckSchema);
export default Deck;
