import { apiURL } from "./config";

export const deleteDeck = async (id: string) => {
	await fetch(`${apiURL}/decks/${id}`, {
		method: "DELETE",
	});
};
