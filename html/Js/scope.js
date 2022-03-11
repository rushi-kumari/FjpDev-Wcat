// function outer(){
//     inner();
//     function inner(){
//         console.log(b+"xyz");
//     }
// }
// var b = 10;
// outer();
// console.log(b);


//------------------------------test questions--------------------------------
//1.
// let randomValue = { name: "Lydia" };
// randomValue = 23;
// if (!typeof randomValue === "string") {
//   console.log("It's not a string!");
// } else {
//   console.log("Yay it's a string!");
// }
// Answer: yah ,its string!

//2.
// const user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }
// user.updateEmail("new@email.com")
// console.log(user.email)
//Answer: new@email.com

//3.
// const fruit = ['🍌', '🍊', '🍎']
// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('🍇')
// console.log(fruit)
// Answer: ['🍇', '🍊', '🍎']

//4.
// let count = 0;
// const nums = [0, 1, 2, 3];
// for(var i in nums){
// 	if (i) count += 1
// }
// console.log(count)
// Answer:  4

//5. find option with error
// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];
// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;
// Answer: c : TypeError: Assignment to constant variable

//6.
// const add = function (x) {
//     return x + x;
// }
// function myFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }
// myFunc();
// myFunc(3);
// Answer:  2 4     3 6

//7. read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
//const person = {
//     name: 'Lydia Hallie',
//     address: {
//       street: '100 Main St',
//     },
//   }; 
//   Object.freeze(person);
// Answer:  freezes every activity on object

//8.
// const person = { name: 'Lydia Hallie' };
// Object.seal(person);
// which option is feasible
// A: person.name = "Evan Bacon"
// B: person.age = 21
// C: delete person.name
// D: Object.assign(person, { age: 21 })
//Answer: A option : frrezes addition,removal

//9.   read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];
// console.log(emojis.flat(1));
// Answer: ['🥑', '✨', '✨', ['🍕', '🍕']] dissolve array to given depth in flat()

//10.
// const randomValue = 21;
// function getInfo() {
//   console.log(typeof randomValue);
//   var randomValue = 'Lydia Hallie';
// }
// getInfo();
//Answer: undefined

// 11. const add = function (x) {
//     function inner (y) {
//         function innermost (z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//         innermost(6);
//     }
//     inner(5);
// }
// add(4);
//Answer: 4 5 6

//12. read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// const groceries = ['banana', 'apple', 'peanuts'];
// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }
//Answer: We don't have to buy bananas!

//13. read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// const person = {
//     firstName: 'Lydia',
//     lastName: 'Hallie',
//     pet: {
//       name: 'Mara',
//       breed: 'Dutch Tulip Hound',
//     },
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   }; 
//   console.log(person.pet?.name);
//   console.log(person.pet?.family?.name);
//   console.log(person.getFullName?.());
//   console.log(member.getLastName?.());
// Answer: Mara undefined Lydia Hallie ReferenceError

//14.
// let num = 1;
// const list = ['🥳', '🤠', '🥰', '🤪'];

// console.log(list[(num += 1)]);
// Answer: 🥰

//15. // read:https://www.w3schools.com/react/react_es6_spread.asp
// function sumValues(x, y, z) {
//     return x + y + z;
// }
//Answer: B: sumValues([...[1, 2, 3]]) to cpy ele at once

//16.
// const person = {
//     name: 'Lydia',
//     age: 21,
//   }; 
//   const changeAge = (x = { ...person }) => (x.age += 1);
//   const changeAgeAndName = (x = { ...person }) => {
//     x.age += 1;
//     x.name = 'Sarah';
//   };  
//   console.log(changeAge(person));
//   console.log(changeAgeAndName());
//   console.log(person);
// Answer:  {name: "Lydia", age: 22}

//17.
// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };
// info.favoriteFood = '🍝';
// console.log(food);
//Answer: ['🍕', '🍫', '🥑', '🍔']

//18.
// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//   }; 
//   const colors = ['pink', 'red', 'blue']; 
//   console.log(colorConfig.colors[1]);
// Answer: TypeError as no colors object is found


// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
//   }; 
//   const colors = ['pink', 'red', 'blue']; 
//   console.log(colorConfig[colors[1]]);
// Answer : true as colors array ele 'red' is true in object colorconfig


//19.
// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return
//     a + b;
//   }  
// Answer:  console.log(nums(4, 2));
//          console.log(nums(1, 2));

//20. read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// const person = {
//     name: 'Lydia',
//     age: 21,
//   }; 
//   for (const [x, y] of Object.entries(person)) {
//     console.log(x, y);
//   }
// Answer:  name Lydia and age 21

//21.
// let newList = [1, 2, 3].push(4);
// console.log(newList.push(5));
// Answer:TypeError

//22.
// console.log('I want pizza'[0]);
//Answer: I

//23.
// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     } 
//     return message;
//   }  
//   console.log(checkAge(21));
// Answer: ReferenceError: message is not defined

//24.
// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
//   let city = person.city;
//   city = 'Amsterdam';  
//   console.log(person);
// Answer:  {name: 'Lydia', age: 21}

//25.
// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);
//Answer: {admin: true, name: 'Lydia', age: 21}

//26.
//console.log(3 + 4 + '5');
// Answer: 3+4 = 7; 7+'5' = 15

//27.
// const person = {
//     name: 'Lydia',
//     age: 21,
//   }; 
//   for (const item in person) {
//     console.log(item);
//   }
//Answer:   name age

//28.
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// Answer: [1, 2, 3, 7 x empty, 11]

//29.
// const person = { name: 'Lydia' };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// Answer: Lydia is 21
//         ƒ sayHi(age) {
//              return `${this.name} is ${age}`;
//          } 
//          Function was resolved from bound function

//30.
// var num = 8;
// var num = 10;

// console.log(num);
// Answer: 10
