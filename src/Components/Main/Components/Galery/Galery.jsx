import React from "react";
import CardContainer from "../CardContainer/CardContainer";

function Galery({cards, onUpdateCard, onDeleteCard}) {
    
  return (
    <section className="places-gallery site__section">
      <CardContainer cards={cards} onUpdateCard={onUpdateCard} onDeleteCard={onDeleteCard}/>
    </section>
  );
}

export default Galery;
