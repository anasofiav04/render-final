import React from "react";
import "./Card.css"

function Card({card, onUpdateCard, onDeleteCard}) {
  return (
    <li className="place-card">
      <img className="place-card__image" src={card.link} alt={card.title} />

      <button
        aria-label="Remove place"
        className="place-card__delete-button"
        type="button"
        onClick={() => {
          onDeleteCard(card)
        }}
      />

      <div className="place-card__description">
        <h2 className="place-card__title">{card.name}</h2>

        <button
          aria-label="Like place"
          className={`place-card__like-button ${card.like? "place-card__like-button_is-active" : ""}`}
          type="button"
          onClick={() => {
            onUpdateCard(card)
          }}
        />
      </div>
    </li>
  );
}

export default Card;
