
const recipients = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');
const cardMessage = [];
function writeCards(names, event) {
   for (let i = 0; i < names.length; i++) {
       
        console.log(cardMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`))
        
    }
       return cardMessage; 
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(4);


