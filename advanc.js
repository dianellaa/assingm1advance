/* 
let user = {
    name: "John",
    years: 30
  }
  let { name, years: age, isAdmin = false } = user;

console.log(name);  
console.log(age);   
console.log(isAdmin);  */

//2
//const planetName = 'Earth';
//let  currentVisitorName = 'Username';//

//3
/*let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi();
/*The code will result in an error because the function sayHi() is declared within the block scope of the if statement. 
Therefore, it's only accessible within that block. Attempting to call sayHi() outside of that block will result
 in a ReferenceError because sayHi() is not defined in the outer scope.*/

//5
/*
const user = {
  name: "John"
}

// does it work?
user.name = "Diana"
console.log(user)

Yes, it's possible to change properties of an object declared with const, but you cannot reassign the variable itself.
 When you declare an object with const, it means the variable cannot be reassigned to another object.
 However, the properties of the object, if they are mutable, can still be modified.
*/
//4
/*let user = {}; // Create an empty object user.
user.name = 'John'; // Add the property name with the value John.
user.surname = 'Smith'; // Add the property surname with the value Smith.
user.name = 'Pete'; // Change the value of the name to Pete.
delete user.name; // Remove the property name from the object.*/


//6
/*let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(salaries)
*/

//7
/*let result = (a + b < 4) ? 'Below' : 'Over';*/

//8
/*let message = login == 'employee' ? 'hello' : 'director' ? 'greetings' : 'no login'
console.log(messange) */
