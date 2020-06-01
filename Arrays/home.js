//Arrays

let fruits = ['banana','apple','orange','pineapple'];
fruits = new Array('banana','apple','orange','pineapple'); 

console.log(fruits[1]);

console.log(fruits);
fruits[0]='pear';
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

console.log('To String : ', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);
console.log(fruits.push('blackberry'),fruits);

console.log(fruits[4]);
fruits[fruits.length]= 'new fruit';
console.log(fruits);

fruits.shift(); //remove first
console.log(fruits);

fruits.unshift('kiwi'); // add first
console.log(fruits);

let vegetablees = ['asparagus','tomato','beans'];
let allGroceries = fruits.concat(vegetablees);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());


let someNumbers = [5,10,2,25,3,555,334,225,66,9];
console.log(someNumbers);
console.log(someNumbers.sort(function(a,b){return a-b}));
console.log(someNumbers.sort(function(a,b){return b-a}));

let emptyArray = new Array();
for(let num=0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);
