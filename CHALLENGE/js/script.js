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
