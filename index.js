let userName="Thabang";
let age=24
let student =true;


document.getElementById("p1").innerHTML="My name "+userName;
document.getElementById("p2").innerHTML="Age "+ age +" Years old"
console.log(userName);
console.log(age);

//Arithmetic Expressions
//modulus operetor extra students
extraStudent = 20%3
//Three goes 6 times into 20 reminder is 2
console.log(extraStudent);
//find if the number is even or odd by%2
 let number =(2*6)+(10-5)
 console.log(number);
//Accept user input in JAvascript
//let username = window.prompt("What is your name")


//get value from input box
let username2;

document.getElementById("myButton1").onclick=function(){
    username2=document.getElementById("myText1").value;
    document.getElementById("myLabel1").innerHTML=username2;
}

//Circle calculation
const PI=3.1459
let radius;
let circumference;

radius=10

circumference=2*PI*radius;
console.log("The Circumference is ",circumference);

//Math Equations
let xi=3.93424
normalRound  =Math.round(xi);
roundOwn=Math.floor(xi);
roundUp=Math.ceil(xi);

console.log("Normal round ",normalRound,"round down",roundOwn,"Round up",roundUp)

//Calculate the hypotunes 
let xv;
let yv;
let hv;
// xv=3;
// yv=4;
// xv= Math.pow(xv,2);
// yv= Math.pow(yv,2);

// hv= Math.sqrt(xv+yv);



//Calculate the hypotunes from user input
//When to take action from the button
document.getElementById("myButton2").onclick=function(){
    xv=document.getElementById("myXText").value;
    xv=Number(xv);
    yv=document.getElementById("myYText").value;
    xy=Number(yv);
    xv= Math.pow(xv,2);
    yv= Math.pow(yv,2);
    hv= Math.sqrt(xv+yv);

    document.getElementById("myLabel4").innerHTML ="Side XY is "+ hv;
}