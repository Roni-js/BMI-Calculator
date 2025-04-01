const formActivate = document.querySelector(".form-open");
const reset = document.querySelector(".reset-btn");
const body = document.querySelector("body");
const form = document.querySelector("#bmiForm");

formActivate.addEventListener("click", function () {
   body.style.backgroundColor = "#8a8a8a";
   form.style.display = "block";
  formActivate.style.display = "none";
})

form.addEventListener("submit", function (event) {
event.preventDefault();
const weight = parseFloat(document.querySelector("#weight").value);
const height = parseFloat(document.querySelector("#height").value);
const result = document.querySelector("#result");
const bmi = weight / (height * 2);
result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
result.style.display = "block";
reset.style.display ="block"
})
reset.addEventListener("click", function () {
reset.style.display ="none";
result.style.display ="none";
})