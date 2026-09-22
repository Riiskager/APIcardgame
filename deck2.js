const deckID = "864qod44nqiy"

function shuffleDeck() {
    return fetch("https://deckofcardsapi.com/api/deck/864qod44nqiy/shuffle/?deck_count=1")

    .then(response => {
        if (!response.ok) throw new Error('Failed');
    return response.json();
    
})
// .then(deck =>{
//     console.log(deck)
//     return fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/?deck_count=1`)
// })
.catch(error =>{
    console.log('Error:', error)
} )
}
function getCard(){
return fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)

  .then(response => {
        if (!response.ok) throw new Error('Failed');
    return response.json();

})

}


shuffleDeck();