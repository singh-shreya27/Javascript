//What this chapter is about?
//async await>>promise chains>>callback hell

                          //SYNC IN JS
//SYNCHRONOUS.
//Synchronous means the code runs in a particular sequence of instructions given in the program.
//Each instruction waits for the previous instruction to complete its execution.
//ASYNCHRONOUS.
//Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions,which causes a delay in the UI.
//Asynchronous code execution allows to execute next instructions immediately and doesnot block the flow.

function hello(){
    console.log("hello!");
}
//we can decide when to execute the function.
setTimeout(hello,2000)  //timeout ; 2s=2000ms

//2nd way .. we can create an arrow function
setTimeout(()=>{
    console.log("hello");
},2000);

//
console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
},2000);

console.log("three");     //these will not wait for upper function .
console.log("four");

//CALLBACK:
//A callback is a function passed as an argument to another function.

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
   sumCallback(a,b);
}
calculator(1,2,sum);   //don't pass with parenthesis i.e.sum()

const hello =()=>{
    console.log("hello");
};
setTimeout(hello, 3000);

//CALLBACK HELL
//Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.
//(Pyramid of Doom)
//This style of programming becomes difficult to understand & manange.

//nesting
//nested if-else
let age=19;
if(age>=18){
    if(age>=60){
    console.log("senior");
}else{
    console.log("middle");
}
}else{
    console.log("child");
}
//nested loop
for(let i=0;i<5;i++){
    let str ="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
    console.log(i,str);
}
