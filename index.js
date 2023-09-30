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

//Counter program 
let count =0;
document.getElementById("mybtn1").onclick=function(){
    
    counter=counter-1;
    document.getElementById("counter").innerHTML=counter;
}
document.getElementById("mybtn2").onclick=function(){
    
    counter=0;
    document.getElementById("counter").innerHTML=counter;
}
document.getElementById("mybtn3").onclick=function(){
    
    counter=counter+1;
    document.getElementById("counter").innerHTML=counter;
}

//Random number generator
let xr;
let yr;
let cr;
 
document.getElementById("mybtn4").onclick = function(){
    xr =randomNumber=Math.floor(Math.random()*20)+1;
    yr =randomNumber=Math.floor(Math.random()*20)+1;
    cr= randomNumber=Math.floor(Math.random()*20)+1;

    document.getElementById("x1Label").innerHTML="X is "+xr ;
    document.getElementById("y1Label").innerHTML="Y is "+yr ;
    document.getElementById("c1Label").innerHTML="C is "+cr ;
}
//String Methods

let fullName="Tha bang";
let lastName1;
let firstName1;

lastName1 = fullName.slice(4);
//slice method
firstName1 = fullName.slice(0,3);

console.log('Last name',lastName1);
console.log("First name",firstName1);
//Method chaining
 let letter = fullName.charAt(4).toUpperCase();

 console.log("Letter is ",letter);

//If statements

let age1=18;

if(age1>=18){
    console.log("You are eligible to vote");
}else if(age1<0){
    console.log("You are not yet Born");
}else{
    console.log("You are not eligible to vote");
}

//Working with the check box

document.getElementById("mybtn5").onclick = function(){
    subscribebtn=document.getElementById("myCheckBox");
    if(subscribebtn.checked){
        console.log("You have subscribed ");
    }else{
        console.log("You have not subscribed ");
    }

    // radio buttons
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const payPalBtn = document.getElementById("payPalBtn");
    //Check if the card is selected
    if(visaBtn.checked){
        console.log("You have selected Visa");
    }else if(masterCardBtn.checked){
        console.log("You have selected Master Card");
    }else if(payPalBtn.checked){
        console.log("You have selected PayPal");
    }else{
        console.log("You have not selected any payment option");
    }
}

//Not operato
//! typically used to reverse conditions
let temp =17

if(!(temp>0)){
    console.log("its cold outside");
}{
    console.log("its warm outside");
}