import React from "react";
import "./Traveler.css";

function Traveler({ onCreateCard }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newCard = {
      name,
      link,
    };

    onCreateCard(newCard);

    setIsModalOpen(false);
    setName("");
    setLink("");
  }

  return (
    <section className="traveler-profile site__section">
      <img
        className="traveler-profile__image"
        src="/assets/images/pfp.jpg"
        alt="Avatar"
      />

      <div className="traveler-profile__details">
        <h1 className="traveler-profile__name">Sofia Villarreal</h1>

        <button
          aria-label="Edit traveler profile"
          className="traveler-profile__edit-btn"
          type="button"
        />

        <p className="traveler-profile__bio">PhD in Information Technology</p>
      </div>
      <button
        aria-label="Add new place"
        className="traveler-profile__add-place-btn"
        type="button"
        onClick={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <h2>Add a new card</h2>

            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="url"
                placeholder="Image URL"
                name="link"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Traveler;
