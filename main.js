// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

console.log("Question 1");

var divideByTwo = function (number) 
{
	console.log(number / 2);
}

divideByTwo(10);

//5

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

console.log("Question 2");

var greeting = function(brothers)
{
	console.log("The best brother around is " + brothers);
}

var bigBrother = "Tommy";
var littleBrother = "Michael";

greeting(bigBrother);
greeting(littleBrother);

//The best brother around is Tommy
//The best brother around is Michael

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

console.log("Question 3");

var price = 10;

for (i=0; i<=12; i++) {
	
	var amazon = function (total) 
	{
		console.log("Month " + i + " Total Price " + total);
	}

	
	var itemsPerMonth = 6;

	amazon(price * itemsPerMonth);
	
	price += 1;
	
}

console.log("Wow! Cashews must be in hgih demand and low supply because amazon is raising the price 1 dollar per unit!");

//Month 0 Total Price 60
//Month 1 Total Price 66
//Month 2 Total Price 72
//Month 3 Total Price 78
//Month 4 Total Price 84
//Month 5 Total Price 90
//Month 6 Total Price 96
//Month 7 Total Price 102
//Month 8 Total Price 108
//Month 9 Total Price 114
//Month 10 Total Price 120
//Month 11 Total Price 126
//Month 12 Total Price 132
//Wow! Cashews must be in hgih demand and low supply because amazon is raising the price 1 dollar per unit!

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
        console.log("Question 4");

var twoteams = function(team){
	
	var team1 = [];
	var team2 = [];
	for (x=0; x<=team.length; x++) 
	{
		
		if (x % 2 == 0)
		{
			team1.push(teammates[x]);
			
		}
		
		else 
		{
			team2.push(teammates[x]);
		}
		
		//twoteams("Team 1: " + team1);
	}

	console.log(team1);
	console.log(team2);
}

var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"];

twoteams(teammates);

      
// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd

  confirm("Question 5");

var quarter = function (number) 
{
	alert(number / 4);
	
	number /= 4;
	
	if (number % 2 === 0)
	{
		confirm("Your number is even!");
	}
	
//	if (number === isNaN()) 
//	{
//		confirm("Enter a number fool!");
//	}
	
	else 
	{
		confirm("Your number is odd!");
	}
}

var num = prompt("Enter a whole number, and I will divide it by four and tell you if it's even or odd!");

quarter(num);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

console.log("Question 6");
var area = function (side, side1) 
{
	area = side * side1;
	console.log(area);
}

var perimeter = function (side, side1) 
{
	perimeter = side * 2 + side1 * 2;
	console.log(perimeter);
}

var side = 10;

var side1 = 5;

area(side, side1);
perimeter(side, side1);

//50
//30


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

confirm("Question 7");

var sleepings = function (hours)
{
	if (hours >= 8) 
	{
		alert("Nice job getting to bed early!");
	}
	
	else if (hours < 8) 
	{
		alert("You're like me! Get more sleep!");
	}
}

var sleep = prompt("How many hours of sleep do you get a night?");

sleepings(sleep);

// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (Hint, you will have to turn the integer into a string before you can reverse it.)

confirm("Question 8");

var digits = function (number) 
{
	
confirm(number.toString().split('').reverse().join(''));

}

var six = prompt("Enter a 6 digit number");


digits(six);

// 9. Within the fuction you wrote in #8, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure.

confirm("Question 9");

var digits = function (number) 
{
	if (number.length !== 6)
	{
		confirm("Can you count? Enter 6 digits next time!");
	}
	else if (number.length === 6)
	{
confirm(number.toString().split('').reverse().join(''));
	}
}

var six = prompt("Enter a 6 digit number");

digits(six);

// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"

console.log("Question 10");

var piggy = function (quarters, dimes, nickles, pennies) {
	var quartersSum = quarters * .25;
	var dimesSum = dimes * .10;
	var nicklesSum = nickles * .05;
	var penniesSum = pennies * .01;
	
	var money = (quartersSum + dimesSum + nicklesSum + penniesSum);
	
	
	console.log("$" + money.toFixed(2));
}

piggy(3, 3, 3, 3);

// 11. Develop a function that determines a person's age by prompting them for their birth year.

console.log("Question 11");

var age = function (birth) 
{
	confirm(2016 - birth);
	
}

var year = prompt("What year were you born?");

age(year);

// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is

console.log("Question 12");

var leapYear = function (year) 
{
	if (year % 4 === 0)
	{
		if (year % 100 !== 0 || year % 400 === 0) 
		{
			console.log("Leap Year!");
		}
		else 
		{
			console.log("Not a leap year!");
		}
	}
	else {
		console.log("Not a leap year!");
	}
}
leapYear(1997);
leapYear(2016);

// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//        If the phone number is more than 11 digits assume that it is a bad number

console.log("Question 13");

var cleanPhone = function(phone){
  phone = phone.toString();
  if(phone.length > 11 || phone.length < 10){
    console.log("Bad Number");
  }
  else if(phone.length === 11){
    if(phone.charAt(0) == 1){
      var clean = phone.substring(1);
      console.log(clean);
    }
    else {
      console.log("Bad Number");
    }
  }
  else {
    console.log(phone);
  }
}
cleanPhone(15868830323);
cleanPhone(5868830323);
cleanPhone(38792359082358);
cleanPhone(32908);
cleanPhone(39286928893);
cleanPhone(3029829838);

// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.

console.log("Question 14");

       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
       

var isNumber = function(array) {
 for(i=0;i<array.length;i++) {
   if(isNaN(array[i])) {
     console.log(array[i] + " is not a number");
   }
   else {
     console.log(array[i]+" is a number!");
   }
 }
}

isNumber(arrayOfAllTheThings);

// 15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.
       
console.log("Question 15");

dieOne = [1,2,3,4,5,6];
dieTwo = [1,2,3,4,5,6];

var rollDice = function (dieOne, dieTwo) 
{
	var roll = [];
	dieOne = dieOne[Math.floor(Math.random() * dieOne.length)]//allows us to go up to 6 for randomnumbers, and then we round down with Math.floor to use a whole number for our stuff ish swag
	//remember the random number is the array value, so 0-5
	console.log(dieOne);
	dieTwo = dieTwo[Math.floor(Math.random() * dieTwo.length)]
	console.log(dieTwo);
	
}

rollDice(dieOne, dieTwo);

// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many spaces the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 spaces. You can call the sides of the board: north, east, south, west or top, right, bottom, left.

// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.

console.log("Questions 16 -17");

var roll = rollDice(dieOne, dieTwo);
var playerOne = 0;

var whichSide = function(roll) {
  var move = roll[0] + roll[1];

    playerOne += move;
    if(playerOne === 10 || playerOne === 20 || playerOne === 30){
      console.log("corner");
    }
    else if(playerOne < 10){
      console.log(playerOne);
      console.log("south");
    }
    else if(playerOne < 20){
      console.log(playerOne);
      console.log("west");
    }

    else if(playerOne < 30){
      console.log(playerOne);
      console.log("north");
    }
    else if(playerOne < 39){
      console.log("east");
    }
    else if(playerOne <= 39){
      console.log("You made it around the board!");
    }
}
whichSide(roll);

whichSide(rollDice(dieOne, dieTwo));
whichSide(rollDice(dieOne, dieTwo));
whichSide(rollDice(dieOne, dieTwo));

