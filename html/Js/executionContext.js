//execution context
var num = 5;
function cube(num){
    var res = num*num*num;
    return res;;
}
var ans1 = cube(num);
var ans2 = cube(10);
var ans3 = cube();

console.log(ans1); //125
console.log(ans2); //1000
console.log(ans3); //NaN as undefined is passed so output is non sensical
console.log(""+cube); //function as whole itself is printed

console.log(undefined*5*undefined); // NaN