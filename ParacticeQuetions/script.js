
// Q.-1create a new input button element on the page using javaScript only Set the text of button to "click me".

    let button = document.createElement("button");
    let input = document.createElement("input");

    document.querySelector("body").append(button);
    document.querySelector("body").append(input);

    button.innerText = "Click Me !";

// Q.-2 Add following attribute to the element :
 //   - change placeholder value of input to "username"
 //   - change the id of btton to "btn"
     
    input.setAttribute("placeholder","userName");
    button.setAttribute("id","btn");

// Q.-3 Access the btn using query selector and btton id. change the button background color to blue and text color to white.

  document.querySelector("#btn");
  button.classList.add("btn-color");


// Q.-4 Create an h1 element on the page and set its text to "DOM Practice" underlined. change its color to purple.

    let heading = document.createElement("h1");
   
    document.querySelector("body").append(heading);
    heading.innerText="DOM Practice";
    heading.classList.add("head");


// Q.-5 Create a p tag on the page and set its text to "Hello Every one i am shivraj."

    let pTag = document.createElement("p");
    pTag.innerHTML="Hello Everyone i am <b>Shivrajkaudare</b>";

    document.querySelector("body").append(pTag);





