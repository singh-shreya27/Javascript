console.log("Hello js.");
 console.log("Hello shreya");
console.log("I want to learn javascript.");
fullName="Tony Stark";
console.log(fullName);
x=undefined;
console.log(x);


//Variable Rules

//Variable names are case sensitive; "a" and "A" is different.
//Only letters, digits, underscore(_) and $ is allowed.(not even space)
//Only a letter, underscore(_) or $ should be 1st character.
//Reserved words cannot be variable names.
//use camelcase ==(fullName)
//let, const and var
//var: Variable can be redirected and updated. A global scope variable.   (we will not use var)
//let: Variable cannot be re-declared but can be updated. A block scope variable.{}
//let a;
//console.log(a);     //if we have not initialised a variable then in let it will get (undefined) by default.
//const: Variable cannot be re-declared or updated.A block scope variable.
//const object keys can be changed.

//DATA TYPES IN JS.
//Primitive data types-7 data types:
//Number,String,Boolean,Undefined,Null,BigInt,Symbol.
//Non-primitive data type-Objects(Array, Functions).
//Object- It is a collection of values.(key value pairs)

const student={
    fullName: "Rahul Kumar",
    age:20,
    cgpa:8.2,
    isPass: true,
};
console.log(student);
console.log(typeof(student));
//to access keys of an object.
console.log(student["fullName"]);
console.log(student.fullName);
//to change value in object
student["age"]=student["age"]+1;
console.log(student.age);
student["name"]= "Rahul sharma";
console.log(student.name);

//ques1.
const product={
    title:"Ball pen",
    rating:4,
    offer:5,
    price:270,
};
console.log(product);
console.log(typeof(product));

//ques2.
const profile={
   userName:"Shradha khapra",
   isFollow: false,
   posts:195,
   followers: 595,
   following:4,
};
console.log(profile);
console.log(typeof(profile["posts"]));
