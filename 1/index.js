"use strict";

function add() {

var numberOneInput = document.getElementById("numberOneInput")
var numberTwoInput = document.getElementById("numberTwoInput")

//   var numberOne = numberOneInput.value;
var numberOne = Number (numberOneInput.value);

//   var numberTwo = numberTwoInput.value;
 var numberTwo = Number(numberTwoInput.value);
 
  var result = numberOne + numberTwo;
  var resultInput = document.getElementById("resultInput");
  resultInput.value=result
}
// add();
function init() {
  var addButton = document.getElementById("addButton");
  console.log(addButton);
  addButton.onclick = add;
}

// init();
window.onload = init;
