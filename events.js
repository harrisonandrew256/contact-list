// Function to modify the text content of the paragraph
// const changeText = () => {
   // const p = document.querySelector('p');

    // p.textContent = "I changed because of an inline event handler.";
// }
// Function to modify the text content of the paragraph
// const changeText = () => {
   // const p = document.querySelector('p');

    //p.textContent = "I changed because of an event handler property.";
//}
// Add event handler as a property of the button element
//const button = document.querySelector('button');
//button.onclick = changeText;

//const p = document.querySelector('p');
//const button = document.querySelector('button');

//const changeText = () => {
  //  p.textContent = "Will I change?";
//}

//const alertText = () => {
  //  alert('Will I alert?');
//}

// Events can be overwritten
//button.onclick = changeText;
//button.onclick = alertText;

// Function to modify the text content of the paragraph
//const changeText = () => {
//    const p = document.querySelector('p');

  //  p.textContent = "I changed because of an event listener.";
//}

// Listen for click event
//const button = document.querySelector('button');
//button.addEventListener('click', changeText);


const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Multiple listeners can be added to the same event and element
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);


// An anonymous function on an event listener
button.addEventListener('click', () => {
    p.textContent = "Will I change?";
});


// Remove alert function from button element
button.removeEventListener('click', alertText);
© 2019 GitHub, Inc.
