import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./App.css";
import { createCard } from "./api/createCard";
import { TDeck } from "./api/getDecks";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCard";

export default function Deck() {
	const [deck, setDeck] = useState<TDeck | undefined>();
	const [text, setText] = useState("");
	const [cards, setCards] = useState<string[]>([]);
	const { deckId } = useParams();

	const handleCreateDeck = async (e: React.FormEvent) => {
		e.preventDefault();
		const { cards: serverCards } = await createCard(deckId!, text);
		setText("");
		setCards(serverCards);
	};

	const handleDeleteCard = async (deckId: string, index: number) => {
		const newDeck = await deleteCard(deckId, index);
		setCards(newDeck.cards);
	};

	useEffect(() => {
		async function fetchDeck() {
			if (!deckId) return;
			const newDeck = await getDeck(deckId);
			setDeck(newDeck);
			setCards(newDeck.cards);
		}

		fetchDeck();
	}, [deckId]);

	return (
		<div className="App">
			<ul className="cards">
				{cards.map((card, index) => (
					<li key={index}>
						<button onClick={() => handleDeleteCard(deckId!, index)}>X</button>
						{card}
					</li>
				))}
			</ul>
			<form onSubmit={handleCreateDeck}>
				<label htmlFor="card-text">Card Title</label>
				<input
					id="card-text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setText(e.target.value)
					}
					value={text}
				/>
				<button>Create Card</button>
			</form>
		</div>
	);
}
