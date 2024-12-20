              //OOPS:OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT.
//CLASSES AND OBJECTS.

//Prototypes in JS:
//A javascript object is an entity having state and behaviour(properties and method)
//JS Objects have a special property called prototype. (reference to an object)
//We can set protoptype using __proto__
//*If objects and prototype have same method, object's method will be used.

const student = {
    fullName:"Shreya singh",
    marks:96.2,
    printMarks: function(){
      console.log("marks:",this.marks);   //student.marks
    } 
     };

//in JS , array is an object.(typeof arr :object)

const employee ={
   calcTax1(){
      console.log("Tax rate is 10%.");
   },
   calcTax2 : function(){
      console.log("Tax rate is 10%.");

   }
   //both are correct ways .
};

const employee ={
   calcTax(){
      console.log("Tax rate is 10%.");
   },
   // calcTax2 : function(){
   //    console.log("Tax rate is 10%.");

   // }
   //both are correct ways .
};

const karanArjun = {
    salary: 50000,
}

//if we want to use the methods/properties of employee function in the karanArjun function then
//we can write employee as a prototype in karanArjun

karanArjun.__proto__ = employee;

 //If we have more than 1 employee , then we will not have to write the same function for all employees.
const employee ={
   calcTax(){
      console.log("Tax rate is 10%.");
   },
   // calcTax2 : function(){
   //    console.log("Tax rate is 10%.");

   // }
   //both are correct ways .
};

const karanArjun = {
    salary: 50000,
}
const karanArjun2 = {
    salary: 50000,
}
const karanArjun3= {
    salary: 50000,
}
const karanArjun4 = {
    salary: 50000,
}

//if we want to use the methods/properties of employee function in the karanArjun function then
//we can write employee as a prototype in karanArjun

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

//*If objects and prototype have same method, object's method will be used.
//example:
const employee={
calcTax(){
    console.log("tax rate is 10%");
},
};

const karanArjun ={
    salary:50000,
    calcTax(){
        console.log("tax rate is 20%");
    },
};
karanArjun.__proto__=employee;

          //CLASSES IN JS.
//Class is a program-code template for creating objects.
//Those objects will have some state(variables) & some behaviour (functions) inside it.

class MyClass{
     constructor(){...}
     myMethod(){...}
}
let myObj = new MyClass();

//we use classes when we have to create multiple objects in same template.
class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        //this->jis bhi object ke liye ye setBrand call hogi wohi object.
        // this.brandName=brand;  //generally we give same name to variable and property.
        this.brand=brand;             //this wala brand -object property
                                      //=brand wala wohi h jo as argument func me aaya h(brand)
    }
}
 //fortuner is an object
let fortuner= new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus= new ToyotaCar();
lexus.setBrand("lexus");

                      //CONSTRUCTOR.
//Constructor() method is:              class MyClass{
//  1.automatically invoked by new              constructor(){...}
 // 2.initializes object                        myMethod(){...}
 //                                                }

class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new objects.");
        this.brand=brand;
        this.mileage=mileage;
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

}
 //fortuner is an object
let fortuner= new ToyotaCar("fortuner",10);   //constructor
console.log(fortuner);
let lexus= new ToyotaCar("lexus",12);      //constructor
console.log(lexus);

                      //Inheritance in JS
//inheritance is passing down properties & methods from parent class to child class.
class Parent{
  }
clas Child extends Parent{
}
//*If child & parent have same method child's method will be used[Method Overriding]
