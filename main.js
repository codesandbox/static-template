(function() {
  /**
   * Solution:
   * 1. Separate html from javascript codes.
   * 2. Use oninput event to print the input range value
   * in real time when the range slider is toggled.
   * 3. Separate the button and range input into two
   * different unique funsction.
   */
   var rangeInput = document.getElementById("range-input")
   var rangeValue = document.getElementById("range-value")
   var button = document.getElementById("btn")
   
   // Show alert message when button clicked
   button.onclick = testTest
   
   function testTest() {
     let value = rangeInput.value
     if(value > 0 && value < 5) {
        alert("first")
        return true
     }
       alert("second")
       return false
   }
   
   // Print the range value to the output
   rangeInput.oninput = rangeOutput
   
   function rangeOutput() {
     rangeValue.innerText = rangeInput.value
   }
  
  })()