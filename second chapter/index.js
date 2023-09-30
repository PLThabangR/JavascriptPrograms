//While loop

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

//For Loops when we know the end
let rows =3;
let columns=5;
let symbol="$"

for(let i=1;i<=rows;i+=1){
   
    for(let j=1;j<=columns;j+=1){
        document.getElementById("myRectangle").innerHTML +=symbol
    }
    document.getElementById("myRectangle").innerHTML += "<br>";

}    

//ternary Operator
//condition ? ifTrue:elsefalse

let adult = checkAge(19);

console.log(adult);

function checkAge(age) {
    return age >= 18? "You are adult" : "You are not adult";
}

//Number gusiing game
const answer = Math.floor(Math.random() *10+1);

let guesses =0;

document.getElementById("guessBtn").onclick=function(){
let guess=   document.getElementById("guessInput").value;
//Keep track of how many guesses we have
guesses+=1;
if(guess== answer){
    alert(`${answer} is the #, It took you ${guess} guesses.`);
}else if(guess< answer){
    alert("Too low");
}else {
    alert("Too high");
}

}

///Array
let fruits = ["Apple", "Orange", "Mango"];

fruits.push("Watermelon");

for(i=0 ; i<fruits.length;i+=1){
   // console.log(fruits[i]);
}
//2D arrays
let fruitArray =["Apple", "Orange", "Mango"];
let vegetablesArray =["carrots","Onions","potatoes","tomatoes"];
let meatArray =["Wors","Staek","Chicken","Mince"];

let foodArray =[fruitArray,vegetablesArray,meatArray];

for(let list of foodArray) {
    for(let food of list){
        console.log(food);
    }
}

//Spread operators 
//Allows string or array to unpacked
let class1 = ["Spongebob","PAtric","Takalani"]
let class2 = ["Jimmy","Mead","James","luke"]

 
class1.push(...class2);

let testName= "Thabang"

console.log(testName);

//Rest parameter represents an indefinite number of parameters 
//packs arguments into array 
let a =1;
let b=2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let result1=0
result1=sum1(a,b,c,d,e,f);
 console.log("The Sum is",result1);
function sum1(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number
    }

return total;
}

//Callback is function passed as an argument to another function
let total =sum2(a,b,displayConsole);
   
function sum2(a,b,callback){
   
    let result =0;
        result=a+b;
    callback(result);
    return result;
}

function displayConsole(output){
    console.log("The output is ",output);
}

//Map Array execute a provided callback function 
//once fro each array element And Create a new Array

let numbers = [1,2,3,4,5,6,7,8,9,10];

let squres = numbers.map((element)=>{
    return Math.pow(element,2);
});

squres.forEach((element)=>{
    console.log("Map element Squared",element);
})

//Filter Method create new array with all elements that passed the test

let age = [18,15,11,60,37,50,12,20,48,33]
 age.sort();
let adults = age.filter((element)=>{
    return element >= 18;
});

adults.forEach((element)=>{
    console.log("Adult list",element);
})

//Reduce Method reduce a array to single value
//Can be used to sum up multiple values

let prices1 = [200,32,34,56,87,90,76,321];

let total2 = prices1.reduce((total,element)=>{
    return total+element;
});

console.log(`The total is${total2}`)

//Sort a Array of numbers

grades = [100,30,50,60,79,40]

grades.sort((a,b)=>{
    return b-a;
});


for(let grade of grades){
    console.log("Descending Order let ",grade);
}

//Anonymous dunction ,functions without names
