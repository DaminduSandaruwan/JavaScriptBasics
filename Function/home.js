
//Function
 
function fun(){
    console.log("Function Called");
}

fun();

//String Concatanation
function greeting(){
    var name = prompt("What is your name?");
    var result = 'Hello ' + name;
    console.log(result);
}

greeting();


//work with Argument
function addnumbers(num1,num2){
    console.log(num1+num2);
}

addnumbers(25,30);
addnumbers('Damindu','Sandaruwan');

//give string arugument using prompt
var myname = prompt("Enter your Name : ");

function greet(myname){
    var result = 'Hello' + ' ' + myname;
    console.log(result);
}

greet(myname);