import React from "react";
import Traveler from "./Components/Traveler/Traveler";
import Galery from "./Components/Galery/Galery";

function Main({ cards, onUpdateCard, onCreateCard, onDeleteCard }) {
  return (
    <main className="main-content">
      <Traveler onCreateCard={onCreateCard} />
      <Galery cards={cards} onUpdateCard={onUpdateCard} onDeleteCard={onDeleteCard}/>
    </main>
  );
}

export default Main;
