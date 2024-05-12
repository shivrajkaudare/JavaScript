
    
    // 1) push() - add element at the end.

    let boys = ["shiv", "raj", "nik", "Deep"];
    console.log(boys);

     boys.push("piyush");
   
        console.log(boys);


    // 2) pop() - delete element at end & return.

    let girls = ["Anu", "payal","Nik","kajal"];

    console.log(girls);

    girls.pop();
    console.log(girls);

 // 3) toString() - convert array to string.

 let arr = ["sh","ak","dk","nk"];

 console.log(arr.toString());

 // 4) concat() - join multiple arrays and returns result.
    let alpha = ["a", "b", "c", "d", "e"];
    let beta = [1,2,3,4,5];

    let ans = alpha.concat(beta);
    console.log(ans);
    
    // 5) unshift() - add to element to tha start.

    alpha.unshift("x");
    console.log(alpha);

    // 6) shift() - delete element from start.

    beta.shift(0);
    console.log(beta);

    // 7) slice() - returns the piece of an array .


    let day = ["mon", "tue", "wed", "thus", "fri", "sat", "sun"];
    console.log(day);

    day.slice(0,4);


    // 8) splice()- change original array-( add , remove , replace.)

    let months = ["jan", "feb", "march", " april", "may"];
    console.log(months);
    months.splice(5,0,"jun");
 console.log(months);
