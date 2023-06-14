const displayContent = document.getElementById("display");
const btnAC = document.getElementById("btnAC");
const btnpn = document.getElementById("btn+/-");
const btn11 = document.getElementById("btn%");
const btn12 = document.getElementById("btn/");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn = document.getElementById("btn*");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn13 = document.getElementById("btn-");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn14 = document.getElementById("btn+");
const btn0 = document.getElementById("btn0");
const btn15 = document.getElementById("btn.");
const btn16 = document.getElementById("btn=");

btnAC.addEventListener("click", function () {
  displayContent.textContent = "";
});
btn1.addEventListener("click", function () {
  displayContent.textContent += "1";
});
btn2.addEventListener("click", function () {
  displayContent.textContent += "2";
});
btn3.addEventListener("click", function () {
  displayContent.textContent += "3";
});
btn4.addEventListener("click", function () {
  displayContent.textContent += "4";
});
btn5.addEventListener("click", function () {
  displayContent.textContent += "5";
});
btn6.addEventListener("click", function () {
  displayContent.textContent += "6";
});
btn7.addEventListener("click", function () {
  displayContent.textContent += "7";
});
btn8.addEventListener("click", function () {
  displayContent.textContent += "8";
});
btn9.addEventListener("click", function () {
  displayContent.textContent += "9";
});
btn0.addEventListener("click", function () {
  displayContent.textContent += "0";
});

btn11.addEventListener("click", function () {
  displayContent.textContent += "%";
});
btn12.addEventListener("click", function () {
  displayContent.textContent += "/";
});
btn.addEventListener("click", function () {
  displayContent.textContent += "*";
});
btn13.addEventListener("click", function () {
  displayContent.textContent += "-";
});
btn14.addEventListener("click", function () {
  displayContent.textContent += "+";
});
btn15.addEventListener("click", function () {
  displayContent.textContent += ".";
});
btn16.addEventListener("click", function () {
  var value = eval(displayContent.textContent);
  displayContent.textContent = value;
});
