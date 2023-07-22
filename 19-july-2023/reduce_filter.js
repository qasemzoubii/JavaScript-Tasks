console.log("Here is : ", "Reduce & Filter");

//Using Reduce 1 -5
var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 },
];

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge(arr) {
  arr = arr.map((ele) => ele.age);
  let sum = arr.reduce((acc, curr) => acc + curr);
  return sum / arr.length;
}
console.log(avgAge(persons));

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/

function longestName(arr) {
  return arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
}
// acc =

let names = persons.map((person) => `${person.name.first} ${person.name.last}`);
console.log(names);
console.log(longestName(names));

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr) {
  return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
}
console.log(maxNumber([1, 2, 4, 9]));
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(str, char) {
  let cnt = 0;
  Array.from(str).reduce((acc, curr) => {
    if (curr === char || acc === char) {
      cnt++;
    }
  });
  return cnt;
}

console.log(repeatChar("Hello world", "l"));

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(n1, n2) {
  let start = n1;
  let end = n2;
  let arr = [];

  if (n1 > n2) {
    start = n2;
    end = n1;
  }

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(usAndNumberBeetweenUs(8, 20));

//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenOnly([1, 8, 6, 4]));
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
  return arr.filter((multi) => multi % 4 === 0);
}
console.log(multiFour([1, 8, 6, 4]));
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, char) {
  let result = [];
  arr.filter((con) => {
    if (con.includes(char)) {
      result.push(con);
    }
  });
  return result;
}
console.log(containChar(["hello", "world"], "w"));
console.log(containChar(["hello", "world"], "l"));

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(str) {
  let x = str.filter((str, index) => {
    if (str.length % 2 !== 0 && index % 2 === 0) {
      return str;
    }
  });

  return x;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(arr, num) {
  let x = arr.filter((ele) => {
    return ele.age > num;
  });
  return x;
}

console.log(olderThan(persons, 56));

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(str, num) {
  let x = str.filter((str) => str.length < num);
  return x;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterThan(strings, 5));
// if you finish the exercises review the material of the week and help your classmate

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sum);
