var a;
a=3;
console.log(a);
console.log(typeof a);

a="hello";
console.log(a);
console.log(typeof a);

a="true";
console.log(a);
console.log(typeof a);

a = null;
console.log(a);
console.log(typeof a);


//string
// " ", ' ', ` `(backTicks) :  all are used for string in js
var s = "hello";
console.log(s);
console.log(typeof s);

//changing lines, both ways
s = "hi guys.\nThis is Rushi."
console.log(s);
var b = `hi hope u doing well
will talk to you later`;
console.log(b);

//making things dynamic
var num = 100;
console.log(`half of ${num} is ${num/2}`);
//${}:makes things dynamic 
//only works with backticks


//To overcome problem of redeclatrion we used let instead of var
let r = 20;
r=200; // can be reintialized
console.log(r);

// let r = 500;
// console.log(r); //cannot be redeclared: SyntaxError

  // 2nd problem with var keyword
    // var keyword is function scoped in case of function else it is global scope 
    // let keyword is block scoped

    let j = 20;
    for (var i = 0; i < num; i++) {
        let j = 20;
        if (i % 2 == 0) {
            let hello = 1000;
            console.log(i);
            console.log(hello); 
        }
        
        console.log("inner"+j);
    }
    console.log("outer "+j);
    console.log(`value of i is " ${i}`);
    console.log(hello); // error dega hello is not defined

      // { 

    //     //this space between opening and closing of curly braces is a block
    // }

    //const keyword
    const a = 2;
    // console.log(a);
    // na hi redeclare na reinitialize
    // const a = 5;
    // a = 4; //TypeError: Assignment to constant variable.
    // console.log("hey");


