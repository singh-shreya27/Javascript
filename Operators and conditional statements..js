//comments in JS
//Part of code which is not executed.
//This is a single line comment.
/* This is a multi-line 
   comment. */
//Operators in JS.
//used to perform some operation on data.

//Arithmetic Operators: +,-,*,/

let a=5;
let b=2;
console.log("a=",a,"and b=",b);
console.log("a+b=", a+b);
console.log("a-b=", a-b);
console.log("a*b=", a*b);
console.log("a/b=", a/b);
console.log("a%b=", a%b);  //%=remainder
console.log("a**b=", a**b);  //**=exponent 

//unary operators.
let a=5;
let b=2;
console.log("a=",a,"and b=",b);
//increment(++), decrement(--)
a++;//a=a+1
a--;//a=a-1
console.log("a=",a);

console.log("++a=",++a); 
console.log("a++=",a++);
console.log("a=",a);

//Assignment operators.
//== , += , -=, *=, %=, **= 
let a=5;
let b=2;
a += 4;   //a=a+4
console.log(a);

//Comparison operators
//equal to ==
//equal to &type ===
//not equal to !=
not equal to &type !==
>,>=,<,<=

let a=5;
let b=2;
console.log("5==2", a==b);  //false
console.log("5!=2", a!=b);  //true
let a=5;  //number
let b="5"; //string  
console.log("a == b", a==b); //true
 //javascript converts string->number then compares with number

// console.log("a === b", a===b); //false
(=== compares data type also)

//Logical operators    // false or true
//Logical and &&
//Logical or ||
//Logical not !

//conditional Statements 

let age=25;
if(age>=18){
    console.log("vote");
}else{
     console.log("not vote"); 
}

let mode="silver";
let color;

if(mode === "dark"){
    color ="black";
}else if(mode === "blue"){
    color ="blue";
}else if(mode === "pink"){
    color="pink";
}else{
    color="white";
}
console.log(color);

//OPERATORS IN JS
//Ternary Operators
//condition?true output : false output

let result =age >= 18 ? "adult" : "no adult";
age>=18 ? console.log("adult") : console.log("not adult");

//Switch statement.
 
//Q.1. Get user to input a number using prompt("Enter a number:").Check if the number is a multiple of 5 or not?
//alert("hello!);   //one time popup

//prompt("hello!");   //this also produces a popup but it can also take an input.
let name=prompt("hello!");
console.log(name);

let num=prompt("Enter a number:");
if(num%5===0){
    console.log(num,"is multiple of 5.");
}else{
    console.log(num,"is not a multiple of 5.");
}

//Q.2.Write a code which give grades to students according to their scores.
//80-100, A
//70-79,B
//60-69,C
//50-59,D
0-49,F

let marks=prompt("Enter your marks(0-100):");
let grade;
if(marks>=80 && marks<=100){
    grade="A";
}
else if(marks>=70 && marks<=79){
    grade="B";
}
else if(marks>=60 && marks<=69){
    grade="C";
}
else if(marks>=50 && marks<=59){
    grade="D";
}
else{
    grade="F";
}
console.log("According to your marks, your grade was",grade);

