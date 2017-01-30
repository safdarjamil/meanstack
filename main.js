var in1 = prompt("Enter First Number: ");
var i = Number(in1);
var in2  = prompt("Enter Second Number: ");
var j = parseInt(in2);
var opp = prompt("Enter Operator:");
var result;
switch (opp) {
  case '+':
      result = i + j;
      break;
  case '-':
      result = i-j;
      break;
  case '*':
      result = i * j;
      break;
  case '/':
      result = i / j;
      break;
  default:
      document.write("Enter a Valid Operator.");
}
document.write("Result: " + result);
