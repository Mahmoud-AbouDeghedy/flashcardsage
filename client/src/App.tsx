import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import { addDeck } from "./api/addDeck";
import { getDecks } from "./api/getDecks";
import { deleteDeck } from "./api/deleteDeck";
import { TDeck } from "./api/getDecks";

function App() {
	const [title, setTitle] = useState("");
	const [decks, setDecks] = useState<TDeck[]>([]);

	const handleCreateDeck = async (e: React.FormEvent) => {
		e.preventDefault();
		const deck = await addDeck(title);
		setTitle("");
		setDecks([...decks, deck]);
	};

	const handleDeleteDeck = async (id: string) => {
		await deleteDeck(id);
		setDecks(decks.filter((deck) => deck._id !== id));
	};

	useEffect(() => {
		async function fetchDecks() {
			const decks = await getDecks();
			setDecks(decks);
		}

		fetchDecks();
	}, []);

	return (
		<div className="container">
			<div className="App">
				<h1>Your Decks</h1>
				<ul className="decks">
					{decks.map((deck) => (
						<li key={deck._id}>
							<button onClick={() => handleDeleteDeck(deck._id)}>X</button>
							<Link to={`/decks/${deck._id}`}> {deck.title}</Link>
						</li>
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
		</div>
	);
}

export default App;
