/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

let zakat = 2.5/100;
let y = 250;
zakat*=y;
console.log(zakat)

/*
Array Tasks : 
1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ]

*/
const num =  [ 1 , 7 , 9 , 45 ];

console.log(num);

const str =  ["Str", "alex","moh",

'the','fox', 'over', "lazy", 'dog'  ]

console.log(str);


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));


/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

const Food = ['Mansaf' , 'Dawali'];
const Sport =["football" , 'swimming',"basketball"];
const Movie = ["Taken","hitman"];
console.log(Food);
console.log(Sport);
console.log(Movie);
/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let firstOfArray=[1,4,5];
console.log(firstOfArray[0])
let arr2 = ["t","u","g","x"];
console.log(arr2[0]);

/*
/
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

let lastOfArray=[1,4,5]; 
let x=lastOfArray[lastOfArray.length-1];
console.log(x);
let secondArr=["t", "u", "g", "x"];
let m = [secondArr.length-1];
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
***********= [1,3,4,6,8,9,10]
*/
var arrayy2 = []
arrayy2.unshift(5)
arrayy2.unshift(3)
arrayy2.unshift(-7)
arrayy2.unshift(9)
arrayy2.unshift(5)
console.log(arrayy2);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//arr.sort(); -> -3,-4,1,2,3,5,6,7,8 

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort();
arr1[0]=-4;
arr1[1]=-3;
console.log(arr1);







































/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/


/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/


/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
