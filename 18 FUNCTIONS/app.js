function isAdult(){
let age = 13;
if(age >= 18){
console.log("adult");
}else{
console.log("not adult");
}
}

isAdult();

//roll a dice

function rolldice(){
let rand = Math.floor(Math.random()*6)+1;
console.log(rand);
}

rolldice();

//avg of 3numbers
function avg(a,b,c){
let average = (a+b+c)/3;
console.log(average);
}

avg(3,4,9);

//sum of n numbers
function sumUpto(n){
let sum = 0;
for(let i=1; i<=n; i++){
sum += i;
}
console.log(sum);
}
sumUpto(5);