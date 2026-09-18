
async function getData() {
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
      const result = await response.json();
    console.log(result);

    } catch (error) {
    console.error(error.message);
  }
};

document.getElementById("start").addEventListener("click", getData())

