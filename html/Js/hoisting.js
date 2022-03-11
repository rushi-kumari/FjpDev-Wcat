console.log(a);
var a = 10; //op:undefined


console.log(x);
greet();
var x = 10;
function greet(){
    console.log("Hello Pepcoders");
}
//op: undefined, hellopepcoders,
//as variable gets some memory ,but no value to print,kuki val baad m assin hui h


// var x = 10;
// function greet(){
//     console.log("Hello Pepcoders");
// }
// console.log(x);
// greet();
//op: 10, hello pepcoders



//func expression is treated as var not fun..hence hello() is not fun
//hello();
var hello = function(){
    console.log("Helloy");
}
hello();





