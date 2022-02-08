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

let r = 500;
console.log(r); //cannot be redeclared: SyntaxError