
//Objects

let student = {
    first:'Damindu', 
    last:'Sandaruwan', 
    age:23,
    height:170,
    studentInfo: function(){
        return this.first+ '\n' + this.last + '\n' + this.age + '\n' + this.height;
    }
};
console.log(student.first);
console.log(student.last);
console.log(student.age);
console.log(student.height);

student.first='Bandara';
console.log(student.first);

student.age++;
console.log(student.age);

console.log(student.studentInfo());

