let deckID;

async function getData() {
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    console.log(result.deck_id);
    deckID = result.deck_id;
  } catch (error) {
    console.error(error.message);
  }
}

getData();

async function drawCard() {
  const card = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckID}/draw/`,
  );
  const result = await card.json();
  console.log(result);
}

document.getElementById("start").addEventListener("click", drawCard);
