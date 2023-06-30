import React, { useState, useEffect } from "react";
import "./App.css";

type TDeck = {
	title: string;
	_id: string;
};

function App() {
	const [title, setTitle] = useState("");
	const [decks, setDecks] = useState<TDeck[]>([]);

	const handleCreateDeck = async (e: React.FormEvent) => {
		e.preventDefault();
		await fetch("http://localhost:5000/decks", {
			method: "POST",
			body: JSON.stringify({ title }),
			headers: { "Content-Type": "application/json" },
		});
		setTitle("");
	};

	useEffect(() => {
		async function fetchDecks() {
			const res = await fetch("http://localhost:5000/decks");
			const decks = await res.json();
			setDecks(decks);
		}

		fetchDecks();
	}, []);

	return (
		<div className="App">
			<ul className="decks">
				{decks.map((deck) => (
					<li key={deck._id}>{deck.title}</li>
				))}
			</ul>
			<form onSubmit={handleCreateDeck}>
				<label htmlFor="deck-title">Deck Title</label>
				<input
					id="deck-title"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setTitle(e.target.value)
					}
					value={title}
				/>
				<button>Create Deck</button>
			</form>
		</div>
	);
}

export default App;
