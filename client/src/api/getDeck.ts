// import { apiURL } from "./config";
import { TDeck } from "./getDecks";

export async function getDeck(deckId: string): Promise<TDeck> {
	const res = await fetch(`/decks/${deckId}`);
	return res.json();
}
