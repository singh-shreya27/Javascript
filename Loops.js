//LOOPS IN JS
//Loops are used to execute a piece of code again and again.

//For loop:
for(let i=1;i<=5;i++){
    console.log("apna college");
}

for(let count=1;count<=5;count++){
    console.log("Apna college");  
}
console.log("Loop has ended.")
//calculate sum of 1 to n
let sum=0;
for(let i=1;i<=9;i++){
   sum=sum+i;
}
console.log(sum);
console.log("loop has ended.");

//Infinite loop=loop that never ends. (although we should never do it in a program).
//stopping condition->true.

//WHILE LOOP.
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}
//does not end with;

//DO WHILE LOOP.
let i=20;
do{
    console.log("Apna college");
}while(i<=10);
//ends with;(REMEMBER)

//FOR-OF LOOP
//It helps us to use loops in strings and arrays.

for(let var of strVar){
 //do some work 
}

//for-of loop
let str = "ApnaCollege";
let size=0;
for(let i of str){
    //i=iterator->characters
    console.log("i:",i);
    size++;
}
//we don't need to set initialization,updation or even ending condition in for-of loop.
console.log("string size=",size);  
//we don't use for-of loop for objects.

//for-in loop
//for in loop ->returns keys of an object
 let student={
    name:"Shreya singh",
    age:20,
    cgpa:8.11,
    isPass:true,

 };
 for(let key in student){
    console.log("key:",key,"value:",student[key]);
 }

//QUES.1:Print all the numbers from 0 to 100.
console.log("numbers:");
for(let i=0;i<=100;i++){
    console.log(i);
}

//QUES.2:Print all the even numbers from 0 to 100.
console.log("even numbers:");
for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log(num);
    }
}

//QUES.3:Create a game where you start with any random game number.Ask the user to keep guessing the game number until the user enters correct value.
let gameNum=27;
let userNum=prompt("Guess the game number:");
console.log(userNum);
while(userNum !=gameNum){
    //(!==) cann't use this because prompt return string
    //game
   userNum= prompt("You entered wrong number,guess again.")
}

    console.log("Congratulations,You won.");



