function calculate() {
  var result = eval(document.forms[0].elements["display"].value);
  document.forms[0].elements["display"].value = result;
}

var equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", calculate);