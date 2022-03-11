let cars = ["BMW","AuDi","MG",1,2,true];
console.log(cars);

console.log(cars[3]);
cars[2] = "mahindra"; // replacing element
console.log(cars[3]);
cars[6] = "homnda";
console.log(cars);


//Methods of an array

//pop method: removes element from the end of array
cars.pop();
console.log(cars);

//push method: pushed ele to end of array
cars.push();
console.log(cars);

// unshift methhod : adds ele at starting of array
 cars.unshift("JLR");
 cars.unshift("mustang");
 console.log(cars);

 //shift method : removes ele from starting of array

 cars.shift();
 cars.unshift();
 console.log(cars);


 // property 
 //length
 console.log(cars.length);


 //2D array

 let array2D=[
     [1,2,3],
     [4,5,6],
     [7,8,9],
 ];
console.log(array2D); // prints array
console.table(array2D);// prints in tabular form
console.log(array2D[1][2]);// access particular ele

