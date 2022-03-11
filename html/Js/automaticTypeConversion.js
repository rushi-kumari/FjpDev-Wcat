var ans = "5"+1;
console.log(ans);  // op: 51
// 1 is converted to string as 5 is string 
//this is automatic type conversion

//+ is string prop as well=>concat
var ans = 1+"5";
console.log(ans);//op:15
//here also string is printed

//so precednce of string > precedence of Integer

//since - is int prop and not string prop
console.log("5"-1); //5-1 = 4


connsole.log(null*5); //null is converted to 0 hence output is 0
console.log(undefined*5); // NaN
connsole.log(null*"5");//0 multiplied by anything is 0

connsole.log("ten"*3); //"ten" cannot be mapped to
//any integer ,hence op is NAN

connsole.log("10"*3);//30 sine * is int property

