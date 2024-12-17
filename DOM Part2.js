               //DOM Manipulation
//Attributes
//1. getAttribute(attr)  //to get the attribute value
//2. setAttribute(attr,value) //to set the attribute value 

//Style
//1. node.style

//Insert Elements :    let el=document.createElement("div")
//1.node.append(el)  //adds at the end of node(inside)
//2.node.prepend(el) //adds at the start of node(inside)
//3.node.before(el)  //adds before the node(outside)
//4.node.after(el)   //adds after the node(outside)

//Delete element
//1.node.remote()    //removes the code.

//Question: 
//Create a button element. Give it a text"click me", background color of red and text color of white.
//Insert the button as the first element inside the body tag.

let newButton=document.createElement("button");
newButton.innerText="Click me";

newButton.style.color="white";
newButton.style.backgroundColor="red";
//select body tag
document.querySelector("body").prepend(newButton);

//Question 2:Create a <p> tag in html, give it a class & some styling.
//Now create a new class in CSS and try to append this class to the <p> element.
//Did you notice, how you overwrite the class name when you add a new one?
//Solve this problem using classList.

//access the <p>
let para=document.querySelector("p");

//write in console 
//we won't use setAttribute to solve this because doing that the properties of previous class gets cancelled.
//so we use classList to contain the properties of both the classes

//at first
para.classList;
//it will show one class.
para.classList.add("newClass");
//after this 
para.classList
//it will show 2 classes.
