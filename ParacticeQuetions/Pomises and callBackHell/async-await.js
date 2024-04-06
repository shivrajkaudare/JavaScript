  
  // async- await 

  let h1 = document.querySelector('h1');

 function colorChange(color, delay){

    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color is changed");
        }, delay)
        
     })
  }

  async function demo(){
    colorChange("green",1000);
    await colorChange("Blue", 1000);
    await colorChange("yellow", 1000);
    await colorChange("orange", 1000);
  };


  demo();

  // Dealing With rejections using try catch.