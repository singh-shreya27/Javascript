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

class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{}
let obj=new Child();

class Person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing.");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve problems, build something.");
    }   
}
class Doctor extends Person{
    work(){
        console.log("Treat patients.");
    }   
}

let shreyaObj = new Engineer();

//Super Keyword
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

super(args) //calls Parent's constructor
super.parentMethod(args)

lass Person{
    constructor(){
        console.log("enter parent constructor");

        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }

}    

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super();   //to invoke parent class constructor.
        this.branch = branch;
        console.log("exit child constructor");

    }
    work(){
        console.log("Solve problems, build something.");
    }   
}

let engObj = new Engineer("chemical engg");

class Person{
    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }

}    

class Engineer extends Person{
    constructor(name){
        super(name);   //to invoke parent class constructor.

    }
    work(){
              super.eat();

        console.log("Solve problems, build something.");
    }   
}

let engObj = new Engineer("shreya");

//Q.1.You are creating a website for your college. Create a class User with 2 properties, name and email.It also has a method called viewData() that allows user to view website data.
 
let DATA ="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
       console.log("data:",DATA);
    }
}

let student1 = new User("shreya","abc@gmail.com");
let student2 = new User("self","xyz@gmail.com");

let teacher = new User("dean","dean@college.com");

//Q.2. Create a new class called Admin which inherits from User.Add a new method caled editData to Admin that allows it to edit website data.
let DATA ="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
       console.log("data:",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
 editData(){
    DATA = "some new value";
 }
}

let student1 = new User("shreya","abc@gmail.com");
let student2 = new User("self","xyz@gmail.com");

let teacher = new User("dean","dean@college.com");

let admin1 = new Admin("admin","admin@college.com");

                      //Error Handling
//try-catch blocks
  try{
     ...normal code
  } catch(err){
    //err is error object
    ...handling error
}

let a=5;
 let b=10;
 console.log("a=",a);
 console.log("b=",b);
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
 try{
 console.log("a+b=",a+c);  //error
 }catch(err){
   console.log(err);
 }
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
 console.log("a+b=",a+b);
