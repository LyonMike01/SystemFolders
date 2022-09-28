/*Slice Example*/

var mike = ("TitiloyeMichael");
mike.slice(0, mike.length - 1);
//console.log("TitiloyeMichae")

// mike.length;
// console.log("15");

var mike = ("TitiloyeMichael");
mike.slice(5, mike.length - 3);
//console.log("oyeMich")


var mike = ("TitiloyeMichael");
mike.slice(10, mike.length - 2);
//console.log("cha")


/***1st work ***/

function getMilk(Mike) { 
    
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
      
    console.log("Buy " + calBots(Mike, 2.3) + " bottles of milk");
      
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
      return calChange(Mike, 2.3);
  }
  
  function calBots(startingMoney, costOfMilk){
      var noOfBot = Math.floor(startingMoney / costOfMilk);
      return noOfBot;
  }
  function calChange(startingMoney, costOfMilk) {
      var change = Math.floor(startingMoney % costOfMilk);
      return change;
  }
  
  var change = getMilk(13)
  console.log("Boss you have " + change + " as change");


/***2nd work ***/

  function bmiCal(weigth, height) {
    var BMI= weigth / Math.pow(height, 2);
    return Math.round(BMI);
}
 var BMI = bmiCal(65, 1.8);
console.log(BMI);

/***Dice random number work***/

var diceNo = Math.random();
   diceNo = diceNo * 6;
    
    diceNo = Math.floor(diceNo) + 1;

console.log(diceNo);

/***3rd work ***/

var name1 = prompt("Your Name is?");
var name2 = prompt("Their name is?");
var loveScore = Math.random() * 100;
n = Math.floor(loveScore) + 1;
alert(name1 + " and " + name2 + " have " + loveScore + "% of love in common");

/***3rd work ***/

var name1 = prompt("Your Name is?");
var name2 = prompt("Their name is?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore <= 25){
    alert(name1 + " and " + name2 + " have " + loveScore + "% of love"); 
 } 
else if (loveScore > 30 && loveScore < 95) {
   alert(name1 + " and " + name2 + " are really love birds, you guys have " + loveScore + "% of love"); 
} 
else {
    alert(name1 + " and " + name2 + " have " + loveScore + "% of love"); 
}


/***Generate Unique ID in JS (Facebook)***/

const uid = () => {
  const val1 = Date.now().toString(36)
  const val2 = Math.random().toString(36).substr(2)
      return val1 + val2;
      
  }
  console.log(uid())

/***Leap Year***/

function isLeap(year) {
  if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0){
              return "Leap Year"
          } 
          else {
              return "Not a Leap Year"
          }
      }
      else {
          return "Leap Year"
      }
  }
  else {
      return "Not Leap Year"
  }
}
var year = prompt("Input a year below and see if it's a Leap Year or not:");
console.log(isLeap(year));

/***Arrays***/
var guestList = ["Lyon", "Mike", "Beji", "Temi", "Emma", "Kai"];
console.log(guestList[4]); // data on position 4
console.log(guestList.length); // no of data in array
console.log(guestList); // no and list data
console.log(guestList.includes("Beji")); // to see if it includes Beji 
//                                          and it brings a boolean value response

/* Exercise on guestlist*/

var guestList = ["Lyon", "Mike", "Beji", "Temi", "Emma", "Kai"];

// var guestList = ["Lyon", "Mike", "Beji", "Temi", "Emma", "Kai"];

// console.log(guestList.includes("mikel")); to see if mikel 
// is among the array and it will return a boolean data type 


var name = prompt("Input your name pls?");

if (guestList.includes(name)) {
       
    alert("Welcome to my party " + name);    
    }
    
else {
        alert("Pls go back Home " + name);
    }

/* Exercise on FizzBuzz without the if statement*/

var output = [];
var count = 1;

function FizzBuzz() {

output.push(count);
count++;

 console.log(output);
 
}

/* Exercise on FizzBuzz with the if statement*/

var output = [];
var count = 1;

function FizzBuzz() {

  while (count <= 100) {                // for (var count = 1; count <= 100; coutn++){}

if (count % 3 === 0 && count % 5 === 0 ){
 output.push("FizzBuzz");
}
 
else if (count % 3 === 0){
  output.push("Fizz");
 }
 
 else if (count % 5 === 0){
  output.push("Buzz");
 }
  
 else {output.push(count);
      }

count++;
    }
 
 console.log(output);
}

/* Exercise on Who's buying the lunch*/

var names = ["Mike", "Lyon", "Temi", "Beji", "Emma"];

function whosPaying(names) {

    var noOfPersons = names.length;
    var randomePersonPosition = Math.floor(Math.random() * noOfPersons);
    var randomPerson = names[randomePersonPosition];

    return randomPerson + " is buying lunch today" //can also use alert (""); and console.log ("");
}
/* 2nd try */

var lads = ["Mike", "Temi", "Lyon", "Beji", "Emma", "Boy"];

function woDyPAy(lads) {

    var noOfLads = lads.length;
    var randomLadPosition = Math.floor(Math.random() * noOfLads);
    var randomPosition = lads[randomLadPosition];
    console.log("Nah " + randomPosition + " dy pay today!"); //can also use alert (""); and return ""
}

/* Exercise on while loop*/

var i = 1;

while (i < 20) {
	console.log(i);
	 i++;
}
//                             both while and for are  almost thesam but different approach

/* Exercise on for loop*/

for ( var i = 1; i < 10; i++) {
    
    console.log(i);
}

/* 2nd Exercise on while loop*/

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles <= 1) {
        bottleWord = "bottle";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
	
}

/*Exercise on Fibonacci without loop*/

function fiboGen(n) {
    
    var output = [];
    
    if (n === 1) {
        output = [0];           //1st output
    }
    else if (n === 2) {
        output = [0, 1];        //2nd output
    } 

    else {
        output = [0, 1];    //[0, 1, 1, 2, 3, 5, 8] output.length = 7
        output.push(output[output.length - 2] + output[output.length - 1]);  
        //output.push.(output[7 - 2 = 5] + output[7 - 1 = 6])
        // output.push.(output at [5] + output at [6]) {5 + 6 ===  11}
    } 
   
    if (n === output.length) {
//                                  3rd output 
    } 
    
    else {
            output.push(output[output.length - 2] + output[output.length - 1]);
    }
    //the output will stop at the forth number because the function is not 
    //a loop function (whilw or for) i.e it can't be circular
//                                                4th output
        
    return output;
}
    output = fiboGen(5);
         
    console.log(output)  
    

/*Fibonacci solution with loop*/

    function fiboGen(n) {
    
        var output = [];
        
        if (n === 1) {
            output = [0];
        }
        else if (n === 2) {
            output = [0, 1];
        } 
    
        else {
            output = [0, 1]; 
            
            for (var i = 2; i < n; i++) {           // if var i = 1 or = 3, the output will always  
//                                                     be a number greater/less than n

            output.push(output[output.length - 2] + output[output.length - 1]);
            
            }
        } 
       
            
        return output;
    }
    
        output = fiboGen(6);
             
        console.log(output)  


        //using prompt to verify

  // var output = fiboGen(prompt("Input your Fibonacci Figure:"));
         
 // console.log(output) or alert ("[" + output + "]"); 


// Mdn for loop personal learning //

const names = ["Mike", "Lyon", "Temi", "Beji", "Emma"];
let myFavNames = 'My names are called';

for (let i = 0; i < names.length; i++) {
   if (i === names.length - 1) {
       myFavNames = '${myFavNames}and${names[i]}.'
   } else {
       myFavNames = '${myFavNames}${names[i]}.'
   }
}
   
console.log(myFavNames);

// Hiegher Order Function

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
     return num1 / num2;
}

function subt(num1, num2) {
    return num1 - num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// undefined
// calculator(4, 2, add);
// 6


// Constructor Function

function HouseHelp (name, age, gender, lang) {
    this.name= name;
    this.age= age;
    this.gender= gender;
    this.lang= lang;
}
var houseHelp1 = new HouseHelp ("Ade", 19, "Male", ["Eng", "Yrb"]);
var houseHelp2 = new HouseHelp ("Ola", 21, "Female", ["Eng", "Yrb"]);
var houseHelp3 = new HouseHelp ("Henry", 20, "Male", ["Hausa", "Eng"]);

// console.log(houseHelp2);
// {name: 'Ola', age: 21, gender: 'Female', lang: Array(2)}

// console.log(houseHelp2.lang);
// ['Eng', 'Yrb']


//Factorial using Function

function facto(numb) {
    
    //  if (result === 0) {
    //     return 1;
    // }
    //  var result = numb;
    //  for ( var i = numb-1; i >= 1; i--)               "from behind"
    //      result *= i;

    var result = 1;
    for ( var i = 2; i <= numb; i++){
        result *= i;
    }                                                    //"from the begining"

    return result;
}


//kebabToSnake   replacing "-" with "_"

function kebabToSnake(input) {
    var newInput = input.replace (/-/g , "_");
    return newInput;
}


//Internship Question

function areAnagram(str1,str2)
    {
        let n1 = str1.length;
        let n2 = str2.length;
   
        if (n1 != n2)
            return false;

    str1.sort();
    str2.sort();

    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}
 
let str1=['t', 'e', 's', 't' ];
let str2=['t', 't', 'e', 'w' ];
 
    if (areAnagram(str1, str2))
        document.write("The two strings are"
                           + " anagram of each other<br>");
    else document.write("The two strings are not"
    + " anagram of each other<br>");


    //Intership Job Interview

    function areAnagram(str1,str2)
	{
		// Get lengths of both strings
		let n1 = str1.length;
		let n2 = str2.length;

		// If length of both strings is not same,
		// then they cannot be anagram
		if (n1 != n2){
			return false;
        }

		// Sort both strings
		str1.sort();
		str2.sort();

		// Compare sorted strings
		for (let i = 0; i < n1; i++){
            
                if (str1[i] != str2[i])
				return false;
            }

		return true;
	}
	
	/* Driver Code*/
    let str1=['t', 'e', 's', 't' ];
    let str2=['t', 't', 'e', 'w' ];
        
    //Function call
    
    if (areAnagram(str1, str2)){
    document.write("The two strings are" + " anagram of each other<br>");
    }
    else document.write("The two strings are not" + " anagram of each other<br>");
    

// date formatting

var options = { 
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

var today = new Date();

console.log(today.toLocaleDateString("en-US")); // 7/30/2022
console.log(today.toLocaleDateString("en-US", options)); // July, July 30, 2022
console.log(today.toLocaleDateString("en-GB", options)); // Saturday, 30 July 2022






