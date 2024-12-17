  //STRINGS IN JS
  //String is a sequence of characters used to represent text.
  //create string
  let str="Apna college";
  //string length
  str.length
  //string indices
  str[0],str[1],str[2]

//Template Literals 
//A way to have embedded expressions in strings
//(created using backticks)
let specialString=`This is a template literal.`;
console.log(specialString);
console.log(typeof(specialString));   //string

//why template literals?
let obj={
    item:"pen",
    price:10,
}
console.log("The cost of",obj.item,"is",obj.price,"rupees");

//to combine this in a single string , we use template literal.

let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//String interpolation
//To create strings by doing substitution of placeholders.
`string text ${expression} string text`


//ESCAPE CHARACTERS:
// (\n): next line
// (\t):tab space
let str="Apna\tCollege";
console.log(str.length)  //12

//String methods in JS: These are built-in functions to manipulate a string.
//str.toUpperCase()
//str.toLowerCase()
//str.trim( )//removes whitespaces (starting and ending)
let str="   Apna College   JS    ";
console.log(str.trim());
//strings are IMMUTABLE in JS.

//str.slice(start.end?)  //returns part of string (ending value is not included)
let str="123456";
console.log(str.slice(2,4));

//str1.concat(str2)   //joins str2 with str1
let str1 ="apna";
let str2 ="college";
console.log(str1.concat(str2));
console.log(str1+str2);

//str.replace(searchVal,newVal)
let str="hellololo";
console.log(str.replace("h","y"));
console.log(str.replaceAll("lo","p"));

//str.charAt(idx)
let str="IloveJS";
console.log(str.charAt(0));

//QUESTION:
//Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
let fullName=prompt("Enter fullname");
let userName="@"+fullName+fullName.length;
console.log(userName);
