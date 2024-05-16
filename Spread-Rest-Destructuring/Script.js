//Q.-1 Square and sum the array elements using the arrow function and then find the average of the array.
// Ans- By using map() and reduce() methods of array.

const arr1 = [3,5,6,8,12,32,64];

let square = arr1.map((val) => {

     return val ** 2;
  
});
console.log("Square Array is",square);

const newArr = [...square]; // Here we use spread for making a copy of an array.

let newArrAvg = newArr.reduce ((prevVal, currVal) =>{

    let sum = prevVal + currVal ;
    return sum / newArr.length;

});
console.log(newArrAvg);


  
// Q.-2 Create a new array using the map function whose each element is equal to the original element puls 5.

    const arr = [32, 45, 54, 32, 12, 10];

    let newArray = arr.map((num) =>{

        return num + 5;

});
// let newArray = arr.map((num) => num + 5); - when there is single parameter we can write arrow function like this.

     console.log("new Array is", newArray);


// Q.-3 Create a new array whose elements are in uppercase of words present in the original array.

    const names = ["shiv", "raj", "nik", "payal", "deep", "swapnil"];

    let upperArr = names.map((nam) => {
    
        return nam.toUpperCase();
    });

console.log(upperArr);


// Q.-4 Write a function called doubleAndReturnArgs which accept an array and a variable number of arguments.the function should return a new array with the original array values and all of the additional argument doubled.
// here we used "Rest" cocept of javascript.

 const doubleAndReturnArgs =(Array, ...args) =>[
      
    Array,...args.map((val) =>   val * 2),

   ];
   let ans = doubleAndReturnArgs([1,2,3],5,6);
   console.log(ans);


// Q.- 5 Write a function called mergeObjects that accepts two objects and return a new object which contain all the keys and values of the first object and second object.


const mergeObjects=((obj1, obj2) =>({
   
   ...obj1,...obj2
    }));

console.log(mergeObjects({a: 1, b: 3},{d: 4, e: 5}));
