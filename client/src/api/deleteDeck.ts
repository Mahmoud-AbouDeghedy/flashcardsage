// import { apiURL } from "./config";

export const deleteDeck = async (id: string) => {
	await fetch(`/decks/${id}`, {
		method: "DELETE",
	});
};
