// 3 types
// arg and param difference

// functions are treated as first class citizens in javascript
// ->function can be returned
// ->function can be passed as parameter/arguments


//1. NORMAL FUNCTION
function add(a,b){
    return a+b;
}

let ans = add(2,6);
console.log(ans);


//eg showing 1st class citizen

function calculator(str,a,b){
    if(str == "add"){
        return function add(a,b){
            console.log(a+b);
        }
    }
    // else{

    // }
}

let returnfun = calculator("add",2,3); // fun can be returned
console.log(returnfun);
returnfun(5,7);

//2. FUNC EXPRESSION

let sayHi = function(){
    console.log("hi");
}
 console.log(""+sayHi);
 sayHi();

  //3. IIFE - Immediiately Invoke Function Expression
  function add(a,b){
      return a+b;
  }
  add(2,3); // normal

  let addIIFE = (function addition(a,b){
    console.log(a+b);
  })(70,30);

  //console.log(""+addIIFE); // iife
  //addIIFE(10,30);

  //trim
