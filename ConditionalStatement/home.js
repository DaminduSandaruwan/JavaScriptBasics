
//Conditional Statement
var  age= prompt('What is your age ?');

if((age>=18)&&(age<=35)){
    status = 'target demo';
}else{
    status = 'not my target audience';
}
console.log(status);

//Switch


switch(6){
    case 0: 
        text = 'Weekend';
        break;
    case 5: 
        text = 'Weekend';
        break;
    case 6: 
        text = 'Weekend';
        break;
    default : 
        text ='Weekday';
}

console.log(text);