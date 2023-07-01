// import { apiURL } from "./config";

export const addDeck = async (title: string) => {
	const res = await fetch(`/decks`, {
		method: "POST",
		body: JSON.stringify({ title }),
		headers: { "Content-Type": "application/json" },
	});
	return res.json();
};
