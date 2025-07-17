//saved messages inside an object
let messages = ['Pika pika pikachu!!!',
                'Charr charmenderrrr!',
                'Bulbasaurrr bulbaa!',
                'Squirtle squirtleeee!'];

const getRandMessages = () => {
    let randomNum = Math.floor(Math.random() * 4);
    let messageRand = "";

    messageRand = messages[randomNum];
     document.getElementById('message').innerHTML = messageRand;
    //console.log(randomNum);

   // return messages[randomNum];

};