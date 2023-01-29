const nameOnCards = ["Gaudalupe", "Ollie", "Aki"];
const message = "surprise"

function writeCards(nameOnCards, message) {
    let newMessage = []
    for (let card = 0; card < nameOnCards.length; card++) {
        newMessage.push("Thank you, " + nameOnCards[card] +"," + " for the wonderful " + message + " gift!")
    }
    return newMessage
}

const letsCount = 10
function countDown(letsCount) {
    let starting = -1
    while(starting < letsCount) {
        console.log(letsCount--)
    }
}