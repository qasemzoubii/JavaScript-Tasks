/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

let num1 = 5,
  num2 = 10;
if (num1 > num2) {
  console.log("The larger number is: " + num1);
} else if (num1 < num2) {
  console.log("The larger number is: " + num2);
} else {
  ("Both numbers are equal.");
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let x = 3,
  y = -7,
  z = 2;
if (x * y * z > 0) {
  alert("The sign is +");
} else {
  alert("The sign is -");
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

var number1 = 4;
var number2 = 0;
var number3 = -1;

if (number1 > number2 && number1 > number3) {
  if (number2 > number3) {
    alert(
      "The sorted numbers are: " + number1 + ", " + number2 + ", " + number3
    );
  } else {
    alert(
      "The sorted numbers are: " + number1 + ", " + number3 + ", " + number2
    );
  }
} else if (number2 > number1 && number2 > number3) {
  if (number1 > number3) {
    alert(
      "The sorted numbers are: " + number2 + ", " + number1 + ", " + number3
    );
  } else {
    alert(
      "The sorted numbers are: " + number2 + ", " + number3 + ", " + number1
    );
  }
} else {
  if (number1 > number2) {
    alert(
      "The sorted numbers are: " + number3 + ", " + number2 + ", " + number1
    );
  } else {
    alert(
      "The sorted numbers are: " + number3 + ", " + number1 + ", " + number2
    );
  }
}

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
/******* Start Your Code *********/

let x1 = -5,
  y1 = -2,
  z1 = -6,
  n1 = 0,
  b1 = -1,
  largest = 0;
if (x1 > y1) {
  largest = x1;
} else {
  largest = y1;
}

if (largest < z1) {
  largest = z1;
}
if (largest < n1) {
  largest = n1;
}
if (largest < b1) {
  largest = b1;
}
console.log(largest);

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let x2 = 4,
  y2 = 8;
if (x2 > y2) {
  console.log("Hello world");
} else {
  console.log("Goodbye");
}
/******* End Your Code ********* */

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
const GPAValue = 81;
switch (true) {
  case GPAValue < 50:
    console.log("Fail");
    break;
  case  GPAValue <= 59:
    console.log("E");
    break;
  case GPAValue <= 69:
    console.log("D");
    break;
  case  GPAValue <= 79:
    console.log("C");
    break;
  case  GPAValue <= 89:
    console.log("B");
    break;
  case  GPAValue <= 100:
    console.log("A");
    break;
}

// 1. Write a JS code to print numbers from 1 to 10

for ( i = 1; i <= 10; i++) {
  console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13, 23, 12, 45, 22, 48, 66, 100];

for ( i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 
*/

for ( i = 1; i <= 8; i++) {
  let triangle = "";
  for (let j = 1; j <= i; j++) {
    triangle += j + " ";
  }
  console.log(triangle);
}

/* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/

let check = "don’t know why";
if (check.includes("y")) {
  console.log("yes");
} else {
  console.log("no");
}
