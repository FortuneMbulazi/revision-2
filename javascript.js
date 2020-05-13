//selecting one letter on the string
var mystring = "simphiwe";
var result = mystring[0];
console.log(result);

//finding the last letter on the string
let output = mystring[mystring.length-1];
console.log(output);

//working with array's
let myArray = ["zero", 1, 2, 3, 4 , 5];
console.log(myArray[5]);

//Modify an array
myArray[0] = 0;
console.log(myArray);

//working with complex arrays
let mySecond = [["Simphiwe"],["Ndumiso"],["Fortune"],["Mabaso"],["Mashobane"],["Mtungwa"]];
//using shift function
mySecond.unshift(["Ceza"]);


//using functions
/* 
The syntax of the function is:
function name(){
    the code goes here;
}
*/

var Simphiwe = 10;
let Ndumiso = 22;
let Fortune = 11;
function myCalculation(a, b, c){
    value = a + b - c;
    return value;
}

console.log(myCalculation(Simphiwe, Ndumiso, Fortune));

function timeFive(num){
    return num * 11;
}
console.log(timeFive(4));

//returning  BOOLEN VALUE
function myBoolen(val){
    val = Simphiwe;
    if(val === Ndumiso || val === Fortune){
        return "The values are equal";
    }
    else{
        return "The values are not equal";
    }
    return val;
}
console.log(myBoolen());

//The logical operators
function logical(checking){
    if(checking > 10){
        return "Greater than 10";
    }
    else if(checking < 5){
        return "Less than 5"
    }
    else{
        return "Between 5 and 10";
    }
    return checking;
}
console.log(logical(7));

//Using the case/switch statement
function interchanging(meaning){
    let answer = "";
    switch(meaning){
        case "A":
            answer = "Apple";
            break;
        case "B":
            answer = "Beat Roots";
            break;
        case "C":
            answer = "Carrot";
            break;
        default:
            answer = "Something else";
    }
    return answer;
}
console.log(interchanging("5"));

let person = {
    name: "Simphiwe",
    Surname: "Mabaso",
    Age: "24",
    ID: 9512215505087,
    "favourite food": "Pizza", 
}
let myPerson = person["favourite food"];
console.log(myPerson);

/*for loops contains 3 statements
statements1 is executed before the loop start
statement2 is the condition for running the loop
statement3 is executed each time after the loop has been executed
for(statement1, statement2, statement3){
    code to be executed;
}
*/
for(let me = 0; me <= 5; me++){
    console.log(me);
}

//working with while loop
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

//working with do...while loop
let us = 3;
do{
    console.log(us);
    us+= 3;
}
while(us<=10);

//working with break
var mine = 0;
for(mine <= 4; mine++;){
    if(mine === 5){
        break;
    }
    console.log(mine);
}

let fortune = {
    name: "Simphiwe",
    surname: "Mabaso",
    phoneNumber: "0734307008"
}
//return value function
function addMe(first){
    return (first + 10);
}
console.log(addMe(6))

function comparisn(value){
    if (value < 5){
        return "Tiny";
    }
    else if(value < 10){
        return "Small";
    }
    else if(value < 15){
        return "Medium";
    }
    else if(value < 20){
        return "Large";
    }
    else if(value > 20){
        return "Huge";
    }
}
console.log(comparisn(5))

function trueOr(a, b){
    return a < b;
}
console.log(trueOr(10,7));
//Anonnimus function
var Anonnimus = function(a, b){
    return a !== b;
}
console.log(Anonnimus(5,7))
//Arrow function
let arrow = () => {
    return console.log("I'm the best at what I do.");
}
arrow();
 
let myConcart = [];
let j = 5;
do{
    myConcart.push(j);
    j++;
}
while(j <10);
console.log(myConcart);
//Distructuring
let theBest = [1,2,3,4,5,6,7,8,9,10,["First", "Second", "Third", "Last"]];

let myObects = {
    name: ["Simphiwe", "Ndumiso", "Fortune"],
    Surname: "Mabaso",
    ID: 9512215505087,
    Cars: 45,
    HaveKids: (a) =>{
        return a > 0 ?  true : false;
    } 
}
console.log(myObects.HaveKids(0));

let avatar = "my name is \"Simphiwe\" and I love you.";
console.log(avatar);
//Rest Operator


//Tenary operator
