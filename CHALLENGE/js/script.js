//CHALLENGE 1

function ageInDays(){
    var birthYear = prompt("What is your birth year? ");
    var ageInDayss = (2020-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer= document.createTextNode('You are '+ageInDayss+ 'days old')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayss);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//CHALLENGE 2

function generateDog(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-dog-gen');
    image.src = "assets/dog.jpg";
    image.width=350;
    image.height =230;
    div.appendChild(image);
}

//CHALLENGE 3
function rpsGame(yourChoice){
    console.log(yourChoice);
    console.log(yourChoice.src);

    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('BOT CHOICE: '+botChoice);
    
    results =decideWinner(humanChoice,botChoice); //[0,1] human lost | bot won
    console.log('Scores: ' +results);
    
    message = finalMessage(results); //{'message':'You won','color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);

}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore==0){
        return {'message':'You lost!','color':'red'};
    }else if(yourScore==0.5){
        return {'message':'You tied!','color':'yellow'};
    }else{
        return {'message':'You Won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,223,1);'>";
    
    messageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size:60px padding:30px; '>"+finalMessage['message']+"</h1>";
    
    botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";

    document.getElementById('flex-rps-div').appendChild(humanDiv);
    document.getElementById('flex-rps-div').appendChild(messageDiv);
    document.getElementById('flex-rps-div').appendChild(botDiv);
}

//CHALLENGE 4
var all_button = document.getElementsByTagName('button');
// console.log(all_button);

var copyAllButtons=[];
for(let i = 0; i< all_button.length; i++){
    copyAllButtons.push(all_button[i].classList[1]);
}
console.log(copyAllButtons);  



function buttonColorChange(buttonThingy){
    // console.log(buttonThingy.value);
    if(buttonThingy.value=='red'){
        buttonRed();
    }else if(buttonThingy.value=='green'){
        buttonGreen();
    }else if(buttonThingy.value=='reset'){
        buttonReset();
    }else if(buttonThingy.value=='random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0; i<all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllButtons[i]);
    }
}
 
function buttonRandom(){
    var choices=['btn-primary','btn-danger','btn-success','btn-warning'];
    for(let i =0; i<all_button.length; i++){
        var randomNumber  = Math.floor(Math.random()*4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randomNumber]);
    }
}

//CHALLENGE 5
let blackjackGame={
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3'); 
const lossSound = new Audio('sounds/aww.mp3'); 

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackhit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackhit(){
    // alert('hit clicked');
    let card = randomCard();
    console.log(card);
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
    console.log(YOU['score']); 
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score']<=21){
        let cardImage = document.createElement('img');
        cardImage.src= `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal(){
    // computeWinner();
    // let winner = computeWinner();
    // showResult(winner);
    // showResult(computeWinner());
    let yourImage= document.querySelector('#your-box').querySelectorAll('img');
    let dealerImage= document.querySelector('#dealer-box').querySelectorAll('img');
    // console.log(yourImage);
    // yourImage[0].remove();
    for(i=0; i<yourImage.length; i++){
        yourImage[i].remove();
    }

    for(i=0; i<dealerImage.length; i++){
        dealerImage[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').textContent=0;

    document.querySelector('#your-blackjack-result').style.color='#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color='#ffffff';
}

function updateScore(card, activePlayer){
    if(card==='A'){
         //If adding keeps me below 21, add 11 otherwise add 1
        if(activePlayer['score']+ blackjackGame['cardsMap'][card][1]<21){
            activePlayer['score']+=blackjackGame['cardsMap'][card][1];
        }else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }else{
        activePlayer['score']+=blackjackGame['cardsMap'][card];
    }  
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent= activePlayer['score'];
    }
    
}

function dealerLogic(){
    let card = randomCard();
    showCard(card,DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
    
    if(DEALER['score']>15){
        let winner = computeWinner();
        showResult(winner);
    }
    
}

//compute WINNER
function computeWinner(){
    let winner;
    if(YOU['score']<=21){
        //higher than dealer or dealer burst
        if((YOU['score']>DEALER['score'])||(DEALER['score']>21)){
            blackjackGame['wins']++;
            console.log('YOU WON!');
            winner = YOU;
        }else if(YOU['score']<DEALER['score']){
            blackjackGame['losses']++;
            console.log('YOU LOST!');
            winner =DEALER;    
        }else if(YOU['score']===DEALER['score']){
            blackjackGame['draws']++;
            console.log('YOU DRAW!');
        }
    }
    //your busts but dealer not
    else if(YOU['score']>21 && DEALER['score']<=21){
        blackjackGame['losses']++;
        console.log('YOU LOST!');
        winner =DEALER; 
    }
    //both busts
    else if(YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draws']++;
        console.log('YOU DRAW!');
    }
    console.log('Winner is : ',winner);
    console.log(blackjackGame);
    return winner;
}

function showResult(winner){
    let message, messageColor;
    if(winner===YOU){
        document.querySelector('#wins').textContent=blackjackGame['wins'];
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();
    }else if(winner===DEALER){
        document.querySelector('#losses').textContent=blackjackGame['losses'];
        message = 'You Lost!';
        messageColor = 'red';
        lossSound.play();
    }else{
        document.querySelector('#draws').textContent=blackjackGame['draws'];
        message = 'You Draw!';
        messageColor = 'black';
    }
    document.querySelector('#blackjack-result').textContent=message;
    document.querySelector('#blackjack-result').style.color=messageColor;
} 