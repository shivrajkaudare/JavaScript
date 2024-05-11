
// Q.1 - write a javascript function that returns array elements larger than a number.


let arr = [2,3,4,5,6,7,8,9,10];

let num = 5;

// we want elements thats are larger than 5 .

function getElements(arr, num){

    for(let i = 0;i <= arr.length; i++){
        if(arr[i] > num){

            console.log(arr[i]);

        }
    }
}
getElements(arr, num);


// Q.2 -Write a javaScript function to extract unique character from a string.
/* Example: str = " abcdabcdefgggh";
            ans = "abcdefgh"                                            */

 let str = "abcdabcdefgggh";

 // function to get string with all unique elements
 function getUnique(str){

    let ans = "";

    for(let i = 0; i < str.length; i++){
        let currChar = str[i];

        if ( ans.indexOf(currChar) == -1){

            // if cuurent character is not added , then add it in ans.
            // otherwise iot is a duplicate.
            ans += currChar;
        }
      
       }
    }
    return ans;
 let uniqueString = getUnique(str);
 console.log(uniqueString);


 // Q.-3 Write a javaScript function that accepts a list of country names as input and returns the longest country as output.
 /* Example : country =["Autralia","Germany","United States of America"]
              output : "United States Of America"          */

    let country =["Autralia","Germany","United States of America"];

    function longestContry(country){

          let ans = 0;
          for(let i = 0; i < country.length; i++) {

              let ansLength = country[ansIdx].length;
              let currLength = country[i].length;

              if (currLength > ansLength){
  
                ansIdx = i;
              }
          } 
          return country[ansIdx];  

    }

    longestContry(country);
