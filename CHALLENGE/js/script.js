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
    //rpsFrontEnd(yourChoice.id,botChoice,message);

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