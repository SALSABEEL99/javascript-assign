//Chapter 2

//Question # 1:
let username;
//
//Question # 2:
let myName = "SalSabeel";
//
//Question # 3:
let message;
message = "Hello world";
alert(message);
//
//Question # 4:
let myname = "SalSabeel";
let Age = 20;
let Qualification = "Intermediate in Commerce";
let Hobbies = "Football and Coding";

//display in the alert box
let Mybiodata = "(My Bio Data)";
Mybiodata += "Name: " + myname + "\n";
Mybiodata += "Age: " + Age + "\n";
Mybiodata += "Qualification: " + Qualification + "\n";
Mybiodata += "Hobbies: " + Hobbies + "\n";
alert(Mybiodata);
//
// Question # 5:
alert("pizza\npizz\npiz\npi\np");

//Question # 6:
let email = "sabeelbaloch21@gmail.com@gmail.com";
let emailaddress = "My email address is: '" + email + "'";
alert(emailaddress);
//

//Question # 7:
let book = "A smarter way to learn JavaScript";

//display in the alert box
alert("I am currently reading the book: '" + book + "'");
//

//Question # 8:
document.write("Yah! I can write HTML content through JavaScript");
//

//Question # 9:
let specialstring = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// Display the string in an alert box
alert(specialstring);

// Display the string in the browser
document.write(specialstring);
//

// Chapter # 4:
// Question 1;
let variable1, variable2, variable3;

//Question # 2
//legal variable
/*let salsabeel;
let sabeel99;
let $sabeel;
let _sabeel;
let sa99beel;
//

//illegal variable
let sab eel
let 99sabeel
let "sabeel"
let @sabeel
let (sabeel)*/
//

//Question # 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write(
  "<p></p>Variable names can only contain ,numbers,$ and _ . For example : $my_1stVariable</p>"
);
document.write(
  "<p>Variables must begin with a letter,$ or_ . For example : $name, _name or name</p>"
);
document.write("<p></p>Variable names are case-sensitive</p>");
document.write("<p></p>Variable names should not be JavaScript keywords</p>");
//
// chapter 5 
/* Qs1 */
let num1 = 5;
let num2 = 3;
let plus = num1 + num2;
document.write("Plus: " + plus + "<br/><br/>");

/* Qs2 */
let minus = num1 - num2;
document.write("Minus: " + minus + "<br/>");

let multiply = num1 * num2;
document.write("Multiply: " + multiply + "<br/>");

let divide = num1 / num2;
document.write("Divide: " + divide + "<br/>");

let modulus = num1 % num2;
document.write("Modulus: " + modulus + "<br/><br/>");

/* Qs3 */
let number = 5;
document.write("Initial Value: " + number + "<br/>");
number++;
document.write("Value after increment: " + number + "<br/>");
// number = number + 7; both are same
number += 7;
document.write("Value after addition is: " + number + "<br/>");
number--;
document.write("Value after decrement is: " + number + "<br/>");
// number = number / 3; both are same
number %= 3;
document.write("The remainder is: " + number + "<br/><br/>");

/* Q4 */
let ticket = 600;
ticket *= 5 ;
document.write("Total cost to by 5 tickets to a movie is " + ticket + "PKR" + "<br/><br/>"); 

/* Q5 */
let table = 4;

for (let i=1 ; i<=10 ; i++) {
    document.write(table + " " + "X" + " " + i + " " + "=" + " " + table*i + "<br/>");
}

/* Q6 */
let temperature = "NNC";
document.write("25C is 77C <br/> 70F is 21.1111C");

/* Q7 */
let shopping;