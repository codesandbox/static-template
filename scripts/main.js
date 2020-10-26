let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world！！！';


window.alert('welcome to my home page!')

// run this function when the document is loaded
window.onload = function () {
    // create a couple of elements 
    // in an otherwise empty HTML page
    
    heading = document.createElement("h1");
    heading_text = document.createTextNode("Big Head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}