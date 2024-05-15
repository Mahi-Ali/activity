//Class Activity:

1.	//Imagine you have a variable age representing a person's age. Write a conditional statement that checks if the person is eligible to vote. If the person's age is 18 or older, print 'You are eligible to vote.' If the person's age is less than 18, print 'You are not eligible to vote yet.' Write this in the programming language of your choice.
2.	//Consider a variable temperature representing the temperature in Celsius. Write a conditional statement that checks if the temperature is greater than 25 degrees. If it is, print 'It's a hot day!' If it's not greater than 25 degrees, print 'It's a normal day.' Write this in the programming language of your choice.
3.	//Imagine you have a variable grade representing a student's score on a test. Write a conditional statement that checks if the grade is greater than or equal to 60. If it is, print 'You passed the test!' If it's less than 60, print 'You failed the test.' Write this in the programming language of your choice
4.	//Write a conditional statement that checks if a variable is_raining is true. If it is, print 'Remember to bring an umbrella.' If it's false, print 'enjoy the sunny weather!'.
5.	//Create a program that asks the user to enter their age. If the age is greater than or equal to 18, print 'You are an adult.' Otherwise, print 'You are a minor.
6.	//Write a program that asks the user to input a number. If the number is positive, print 'The number is positive.' If it's negative, print 'The number is negative.' If it's zero, print 'The number is zero.'//
 

 
 //Question:1 //
 var age =prompt("Enter your age")

 if (age > 18)
 console.log("you are aligible for voting");

 else{
    console.log("you are not aligible for voting");
 }


//Question:2//
 var temprature =prompt("enter temprature");
 if (temprature > 25)
 console.log("it's a hot day");
else{
    console.log("it's a normal day");
}

//Question:3//
let student_grade =prompt("enter your grade");
 if (grade > 60)
console.log("you pass the test!");
else{
    console.log("you fail the test");
}

//Question:4//
let raining = true;
if(raining == true){
console.log("Remember to bring umbrella");}
else{
    console.log("Enjoy the sunny weather");
}

//Question:5//
var age =prompt("enter your age");
 if (age > 18)
console.log("you are an adult");
else{
    console.log("you are a minor");
}

//Question:6//
// Prompting the user to input a number
const number = parseFloat(prompt("Enter a number:"));

// Checking if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//

 let score = +prompt("Enter your score");
 if(score >= 80 || score >= 60){
 console.log("you are pass");
}
else{
    console.log("you are failed");
}






