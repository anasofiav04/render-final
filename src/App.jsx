import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import api from "./Components/DataProvider/Api";

function App() {
  const [cards, setCards] = useState([]);
  async function loadCards() {
    try {
      const data = await api.getallcards();
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCards();
  }, []);

  async function handleUpdateCard(card) {
    const likeinvertido = !card.like;

    try {
      // const updatedCard = await api.updateCard(card._id, likeinvertido);
      setCards((cards) =>
        cards.map((c) =>
          c._id === card._id ? { ...c, like: likeinvertido } : c
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
  async function handleDeleteCard(card) {
    await api.deleteCard(card._id);

    setCards((cards) => cards.filter((c) => c._id !== card._id));
    // try {
    // } catch (error) {
    //   console.error(error);
    // }
  }
  async function handleCreateCard(newCard) {
    try {
      const createCard = await api.createCard(newCard);
      setCards((card) => [createCard, ...card]);
    } catch (error) {
      console.error(error);
    }
    loadCards();
  }

  return (
    <>
      <div>
        <Header />
        <Main
          cards={cards}
          onUpdateCard={handleUpdateCard}
          onCreateCard={handleCreateCard}
          onDeleteCard={handleDeleteCard}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
