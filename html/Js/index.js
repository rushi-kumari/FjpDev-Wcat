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