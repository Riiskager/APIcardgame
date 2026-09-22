const deckID = "864qod44nqiy";

function shuffleDeck() {
  return fetch(
    "https://deckofcardsapi.com/api/deck/864qod44nqiy/shuffle/?deck_count=1",
  )
    .then((response) => {
      if (!response.ok) throw new Error("Failed");
      return response.json();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
function getCard() {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed");
      return response.json();
    })
    .then((data) => {
      const cardImage = data.cards[0].image;
      document.getElementById("trukketkort").src = cardImage;
    });
}

document.getElementById("start").addEventListener("click", getCard);
shuffleDeck();
