                                    //Events in JS
// The change in the state of an object is known as an Event.
//Events are fired to notify code of "interesting changes" that may affect code execution.

     //Inline event handling.
//1.Mouse events(click,double click etc..)
//2.Keyboard events(keypress, keyup, keydown)
//3.Form events(submit etc..)
//4.Print event & many more.

                           //in html:
<button onclick="console.log('button was clicked'); alert('hello!')">Click me!</button>
<button ondblclick="console.log('button was clicked 2 times');">Click me 2 times!</button>
<div onmouseover="console.log('you are inside div.')">
     This is a box.
</div>

                                   //Event handling in JS.
node.event=()=>{
    //handle here
}

                            //in JS:
//access btn1
let btn1=document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked.");
   let a=25;
   a++;
   console.log(a);  //26
}

let div=document.querySelector("div");
div.onmouseover=()=>{
   console.log("you are inside div");
}

//Priority: JS handling > Inline handling
//If we write multiple handlers in JS then the last handler will override others i.e. last one will be implemented.

                                    //Event Object
//It is a special object that has details about the event.
//All event handlers have access to the Event Object's properties and methods.

node.event=(e) =>{
  //handle here 
    }

//e.target, e.type , e.clientX , e.clientY

let btn1=document.querySelector("#btn1");

btn1.onclick = (evt) => {
   console.log(evt);
   console.log(evt.type);
   console.log(evt.target);
   console.log(evt.clientX,evt.clientY);
    
}

let div=document.querySelector("div");
div.onmouseover=(evt)=>{
   console.log(evt);
   console.log(evt.type);
   console.log(evt.target);
   console.log(evt.clientX,evt.clientY);
    
}

                             //Event Listeners
node.addEventListener(event,callback)     //callback will be a function (handler)
node.removeEventListener(event,callBack)
//*Note : the callback reference should be same to remove.

btn1.addEventListener("click",(evt) =>{
   console.log("button was clicked.-handler 1");
  
})
btn1.addEventListener("click",() =>{
   console.log("button was clicked.-handler 2");
})
//to remove handler3
const handler3=()=>{
   console.log("button was clicked.-handler 3");
}
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",() =>{
   console.log("button was clicked.-handler 4");
})

btn1.removeEventListener("click",handler3)

                                        //IMPORTANT.
 //Question-Create a toggle button that changes the screen to dark mode when clicked & light-mode when clicked again.

let modeButton= document.querySelector("#mode");
let currMode= "light"; //dark
modeButton.addEventListener("click",()=>{
    if(currMode==="light"){
      currMode="dark";
      document.querySelector("body").style.backgroundColor="black";
    }else{
      currMode="light";
      document.querySelector("body").style.backgroundColor="white";

    }

    console.log(currMode);
});
 //using classList
//in css:
.dark{
    background-color: black;
    color: white;
}
.light{
    background-color: white;
    color: black;
}

//in JS:
let modeButton= document.querySelector("#mode");
let body=document.querySelector("body");
let currMode= "light"; //dark
modeButton.addEventListener("click",()=>{
    if(currMode==="light"){
      currMode="dark";
      body.classList.add("dark");
      body.classList.remove("light");
    }else{
      currMode="light";
      body.classList.add("light");
      body.classList.remove("dark");


    }

    console.log(currMode);
});



