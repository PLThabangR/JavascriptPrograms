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
    console.log(fruits[i]);
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
