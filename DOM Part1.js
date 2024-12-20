                                    //DOCUMENT OBJECT MODEL.

//Starter Code
//<style> tag connects HTML with CSS.
//<script> tag connects HTML with JS.

//Window Object
//The window object represents an open window in a browser.It is browers's object(not JavaScipt's) and 
//is automatically created by browser.
//It is a global object with lots of properties and methods.

//What is DOM?
//When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

            //           window
            //          |
           //        document
          //            |
         //             html
        //             /        \
        //       head            body
       //      / / | \            /   \
     //  meta meta title link     div    script
       //                       / / | \
       //                   img h1 p div

//DOM is usd to make dynamic changes/manipulation.
                   //DOM Manipulation:
//selecting with id:
document.getElementById("myId")
//when the element having that id does not exist, we get null.
//selecting with class
document.getElementsByClassName("myClass")
//when the element having that class doesnot exist we get empty html collection.
//selecting with tag
document.getElementsByTagName("p")

let heading = document.getElementById("heading");
console.dir(heading);

// #:id  , id is unique
// .:class

let headingclass=document.getElementsByClassName("heading");
console.dir(headingclass);

let parahs=document.getElementsByTagName("p");
console.dir(parahs);

                  //Query Selector(A better way to access our elements)
document.querySelector("myId / myClass / tag")
//returns first element

document.querySelectorAll("myId / myClass / tag")
//returns a NodeList

let firstEle= document.querySelector("p");   //first element
console.dir(firstEle);                 

let allEle=document.querySelectorAll("p");   //all elements
console.dir(allEle);

//write class name with a .(dot)
//write id name with a #.
let firstEle= document.querySelector(".heading");   //first element
console.dir(firstEle);                 

let allEle=document.querySelectorAll(".heading");   //all elements
console.dir(allEle);

                   //Properties
//1.tagName : returns tag for element nodes
//2.innerText: returns the text content of the element and all its children
//3.innerHTML: returns the plain text or HTML contents in the element
//4.textContent: returns textual content even for hidden elements

//when we create DOM tree :
//we have 3 types of nodes:
//1.Text nodes
//2.Comment nodes
//3.Element nodes (we work on this)

//Question 1:Create a H2 heading element with text-"Hello Javascript".Append "from Apna College Students" to this text using JS.

//access the element
let h2=document.querySelector("h2");
console.dir(h2.innerText);
//property->change
h2.innerText = h2.innerText + " from Apna college students"; //concatenate

//Question 2:Create 3 divs with common class name-"box".Access them & add some unique text to each of them.
let divs=document.querySelectorAll(".box");
// console.dir(divs[0]);
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
       
//using for of loop
let idx=1;
for(div of divs ){
   div.innerText=`new unique value ${idx}`;
   idx++;
   // console.log(div.innerText);
}
