// CardList.js
import React, { useState } from 'react';
import Card from './Card';
import CardForm from './CardForm';
import cardData from '../data/data';

const CardList = () => {
  const [cards, setCards] = useState(cardData);

  const addCard = (newCard) => {
    setCards([...cards, { id: Date.now(), ...newCard }]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const editCard = (id, newBody) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, body: newBody } : card))
    );
  };

  return (
    <div>
      <CardForm onSubmit={addCard} />
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={deleteCard} onEdit={editCard} />
      ))}
    </div>
  );
};

export default CardList;
