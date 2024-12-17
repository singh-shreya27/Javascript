//Arrays in JS:
//Collection of items.
let marks=[97,82,77,65,32];
console.log(marks);
console.log(marks.length);
typeof(marks)   //object
//so arrays are a object datatype.
//stringa are immutable in javascript.
//arrays are mutable in javascript.

//Looping over an array
//Print all elements of an array.
let heroes=["ironman","spiderman","hulk","loki","wanda","vision"];
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

//for-of loop
for(let hero of heroes){
    console.log(hero);
}

//Q.1.For a given array with marks of students->[85,97,44,37,76,60]
//Find the average marks of the entire class.
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
console.log(sum);
let avg=sum/marks.length;
console.log(avg);

//Q.2.For a given array with prices of 5 items->[250,645,300,900,50]
//All items have an offer of 10% OFF on them.Change the array to store final price after applying offer.

//using FOR-OF LOOP.
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`value at index ${i}=${val}` ) ;
    let offer= val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer=${items[i]}`);
    i++;
}

//using FOR-LOOP.
let price=[250,645,300,900,50];
for(let i=0;i<price.length;i++){
   let offer=price[i]*0.1;
    price[i]=price[i]-offer;
    console.log("value after offer:",price[i]);
}

//ARRAY METHODS:
//1.push(): add to end.
let veggies=["tomato","potato","carrot","chilli"];
console.log(veggies);
console.log(veggies.push("lemon"));
console.log(veggies);

//2.pop(): delete from end and return .
let veggies=["tomato","potato","carrot","chilli"];
console.log(veggies);
console.log("deleted item:",veggies.pop());
console.log(veggies);

//3. toString(): converts array to string.
let veggies=["tomato","potato","carrot","chilli"];
console.log(veggies);
console.log(veggies.toString());

//4.Concat():joins multiple arrays and returns result.
let marvelHeroes=["thor","spiderman","loki","vision"];
let dcHeroes=["superman","batman"];
let indianHeroes=["shaktiman","krish"];
let heroes=marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroes);

//5.unshift():add to start
let marvelHeroes=["thor","spiderman","loki","vision"];
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

//6.shift():delete from start and return
let marvelHeroes=["thor","spiderman","loki","vision"];
let val=marvelHeroes.shift();
console.log("Deleted hero:",val);
console.log(marvelHeroes);

//7.slice(): returns a piece of the array  ->does not change original array.
//slice(startIdx, endIdx)->ending index is non-inclusive
let marvelHeroes=["thor","spiderman","loki","vision","antman"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(2,4));

//8.splice(): change original array(add,remove,replace)
//splice(startIdx,delCount,newElement)
let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);

let arr=[1,2,3,4,5,6,7];
//add element
arr.splice(2,0,101);

let arr=[1,2,3,4,5,6,7];
//delete element
arr.splice(2,1);

let arr=[1,2,3,4,5,6,7];
//replace element
arr.splice(3,1,89);

//if we only use arr.splice(4); it means delete all elements after index 4.

