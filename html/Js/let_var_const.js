
console.log(x);
var x = 10;
var b = 100;
console.log(b);

// block -> to compound statemnts
// {
//     //
//     //
// }

//eg:  if(10>0){
    //st 1
    //st2
//}

//block scope:
//variables declared using let and const
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);

//shadowing
let xyz = 100;
const cd = 9;
{
    var ab = 10;
    let xyz = 20;
    const cd = 30;

    console.log(ab);
    console.log(xyz);
    console.log(cd);
}
console.log(xyz);
console.log(ab);
console.log(cd);