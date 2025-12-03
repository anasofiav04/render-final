class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handserveresponse(res) {
    if (!res.ok) {
      throw new Error(Error `: ${res.status}`);
    }
    return res.json();
  }
  updateCard(cardId,like){
    return fetch(`${this._baseUrl}/updateCard/${cardId}`,{
      method:"PUT",
      headers: this._headers,
      body: JSON.stringify({
        like
      })
    }).then(this._handserveresponse)
  }
  createCard(data) {
  return fetch(`${this._baseUrl}/createCard`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify(data),
  }).then(this._handserveresponse);
}
  deleteCard(cardId){
    return fetch(`${this._baseUrl}/deleteCard/${cardId}`,{
      method: "DELETE",
      headers: this._headers,
    }).then(this._handserveresponse)
  }
  getallcards() {
    return fetch(`${this._baseUrl}/getAllCards`, {
      headers: this._headers,
    }).then(this._handserveresponse);
  }
}

const api = new Api("https://dispinteligentes9b.onrender.com", {
  "Content-Type": "application/json",
});

export default api;