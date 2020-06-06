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
    'dealer': {'scoreSpan':'#your-blackjack-result','div':'#dealer-box','score':0},
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackhit);

function blackjackhit(){
    // alert('hit clicked');
    let cardImage = document.createElement('img');
    cardImage.src= 'images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();

}

