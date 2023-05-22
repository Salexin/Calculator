const dayInp = document.getElementById("DAY");
const monthInp = document.getElementById("MONTH");
const yearInp = document.getElementById("YEAR");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);


const date = new Date();
let DAY = date.getDate();
let MONTH = 1 + date.getMonth();
let YEAR = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (monthInp.value > 12) {
        monthInp.style.borderColor = "red";
        monthInp.parentElement.querySelector("small").innerText = "must be valid month.";
        validator = false;
    } else if (dayInp.value > 31) {
        dayInp.style.borderColor = "red";
        dayInp.parentElement.querySelector("small").innerText =
          "must be valid day.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > DAY) {
      DAY = DAY + months[MONTH - 1];
      MONTH = MONTH - 1;
    }
    if (monthInp.value > MONTH) {
      MONTH = MONTH + 12;
      YEAR = YEAR - 1;
    }

    const d = DAY - dayInp.value;
    const m = MONTH - monthInp.value;
    const y = YEAR - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}
