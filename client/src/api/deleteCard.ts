// import { apiURL } from "./config";
import { TDeck } from "./getDecks";

export const deleteCard = async (id: string, index: number): Promise<TDeck> => {
	const res = await fetch(`/decks/${id}/cards/${index}`, {
		method: "DELETE",
	});
	return res.json();
};
