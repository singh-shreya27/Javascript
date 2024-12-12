//Functions in JS :
//Block of code that performs a specific task, can be invoked(called) whenever needed.

//1.//Function definition:
function functionName(param1,param2...){
          //do some work 
   }
//2.//Function call:
functionName();

//example:
function myFunc(){
    console.log("Welcome to Apna college.");
    console.log("We are learning JS.");
}
myFunc();   //function call

 function myFunc(msg){
    //(msg):parameter ->input //function definition ke andar jo variable hota h usko parameter kehte h.
    console.log(msg);
}
myFunc("I am stupid."); //argument  //function call ke andar jo variable hota h usko argument kehte h.

function myFunc(msg,n){
    //parameter-> multiple inputs
    console.log(msg*n);
}
myFunc("I am stupid.",100); //argument
//output=NaN (not a number)  number cannot be multiplied to a string.

//Function which calculates the sum of 2 numbers.
function sum(a,b){
   console.log (a+b);
}
sum(2,3);

//#
function sum(x,y){
//local variables
    s=x+y;
console.log("Before return:");
    return s;
//any code written after return will not be executed.
}
sum(1,5);
//nothing will be printed
//so we have to store this returned value.
let val=sum(1,5);
console.log(val);

//FUNCTION PARAMETERS ARE LIKE LOCAL VARIABLES OF FUNCTION AND THEY ARE BLOCK SCOPED.

//Arrow functions:Compact way of writing a function.
                    const functionName =(param1,param2 ...)=>{
                                  //do some work
                           }

//sum function
function sum(a,b){
    return a+b;
}

//ModernJS
const arrowSum=(a,b)=>{
    console.log(a+b);
};
console.log(arrowSum(3,4));

//multiplication function
function mul(a,b){
    return a*b;
}
let arrowMul=(a,b)=>{
    console.log(a*b);
};
console.log(arrowMul(3,2));

//Generally, arrow functions are used for small work.

//Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.

function vowelCount(str){
   
    //print every character.
    for(const char of str){
        console.log(char);
    }

     let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char=="o" || char=="u"){
           count++;
        }
    }
console.log(count);
}
vowelCount('yyy');

//create an arrow function to perform the same task.
const arrowcountVowel=(str)=>{
    let count=0;
        for(const char of str){
            if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
               count++;
            }
}
     console.log(count);
}

console.log(arrowcountVowel('ahhy'));

                     //HIGHER ORDER FUNCTIONS/METHODS.
                //forEach loop in arrays
//arr.forEach(callBackFunction)
CallbackFunction: Here, it is a function to execute for each element in the array.
*A callback is a function passed as an argument to another function.

//for each cannot be used for strings.
arr.forEach((val)=> {
          console.log(val);
           })

//example:
let arr=[1,2,3,4,5]

arr.forEach(function printVal(val){
console.log(val);
});

//callback function is generally passed as an arrow function.
let arr=[1,2,3,4,5];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
});

//HIGHER ORDER FUNCTIONS/METHODS: are the functions which takes other functions as a parameter inside them or they return another function as output.
//wherever we see callback function , that becomes a higher order function.

//QUESTION:
//For a given array of numbers, print the square of each value using the forEach loop.
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
});

//SOME MORE ARRAY METHODS.
                           //MAP:
//CREATES a new array with the results of some operation.The value its callback returns are used to form new array.
arr.map(callbackFnx(value,index,array))

let newArr=arr.map((val)=>{
   return val*2;
   })

let nums=[67,52,39];
nums.map((val)=>{
    console.log(val);
});
                  //FILTER:
//Creates a new array of elements that give true for a condition/filter.
//Eg:all even elements.

let newArr=arr.filter((val)=>{
      return val%2===0;
});
                    //REDUCE:
//Performs some operations and reduces the array to a single value.It returns that single value.
let arr=[1,2,3,4];
const output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);

//find maximum element from the array.
let arr=[5,6,2,1,3];
const output=arr.reduce((prev,curr)=>{
    return prev>curr? prev:curr;
});
console.log(output);

//Question:
//We are given array of marks of students.Filter out of the marks of students that scored 90. 
let marks=[45,89,67,91,95,36,1];
let newArr=marks.filter((val)=>{
    return val>90;
});
console.log(newArr);

//Question:
//Take a number n as input from user.Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let n=prompt("Enter n:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

const sum=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log("sum:",sum);

const prod=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("prod:",prod);
