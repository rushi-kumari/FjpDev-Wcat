//js objects are in key value pair

let obj = {}; //empty object
console.log(obj);

let person = {
//key[has proprties as well as method] : value
 Name : "Rushi",
 age:24,
 phone:878976789,
 gender:"female",
 height :"164 cm"
};

console.log(person);
 // properties access of object
console.log(`Hey ${person.Name}, thankyou for sign in`);//dot notatio
console.log(person["gender"]);//square bracket notation

//string properties
let str = "Hello";
console.log(str.toLowerCase());
console.log(str.length);

//nested objects
//obj having methods, array,property,obj 
//=> primitive as well as reference data types can be present
let captainAmerica={
    firstName:"Steve",
    lastName:"Roger",
    friends : ["Bucky", "Tony Stark", " Bruce Banner"],
    age:102,
    isAvenger : true,
    address: {
        state: "ManHatten",
        city:"New York",
        Country:"USA"
    },
    sayHi:function(){
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[2]);
captainAmerica.sayHi();

// method->objects k andr k function
//console.log(str.toUpperCase);
for(let key in captainAmerica){
    //key k and key present h
    console.log(key);
    //value
    //variable k andr jo binded value h wo chahiy
    //key is var not string thatswhy "" is not present
    console.log(captainAmerica[key]);
    
    //since no key namad property is there ,this is error...
    //An exception where .dot notation is not used..
    //here square bracket notation is used.
    //console.log(captainAmerica.key);
}





