//basic
console.log("hello.world!");
let a = 10;
let b = 5;
console.log("sum is : ", a+b);

let pencilprice = 10;
let eraserprice = 5;
console.log("the total price is: ",pencilprice + eraserprice,"rupees.");
let output = `the total price is : ${pencilprice} rupees.`;
console.log(output);

//comparison operator
let bag = 30;
console.log(bag < 18);

//conditional statement
console.log("before my if statement");
let age = 14;
if(age >= 18){
console.log("you can vote");
console.log("you can drive")
}
console.log("after my if statement");

//question 1 :- print trafic lights

let color ="red";
if(color === "red"){
console.log("stop!");
}
if(color === "yellow"){
console.log("slow down!");
}
if(color === "green"){
console.log("go!");
}

//question 2 :- check string
let str ="snake";

if(str[0] === "a" && str.length > 3){
console.log("good string");
}else{
console.log("not a good string");
}