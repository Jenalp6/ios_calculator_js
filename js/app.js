//! TIMER
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const display = document.querySelector(".display");
// hour.textContent = "18";

const button = document.querySelector(".buttons-container");
const number = document.querySelectorAll("number");
const operation = document.querySelector("operator");
const screendown = document.querySelector(".screen-down");
const screenup = document.querySelector(".screen-up");

button.addEventListener("click", (e) => {
  if (e.target == button) return;

  const key = e.target;
  const keyValue = key.innerText;
  if (key.classList.contains("number")) {
    screendown.innerText += keyValue;
  } else if (key.classList.contains("operation")) {
    // screenup.innerText = screendown.innerText + keyValue;
    // screendown.innerText = '';
    mathOperation();
    screenup.innerHTML = screendown.innerHTML + e.target.innerHTML;
    screendown.innerText = "";
  }
});

function mathOperation() {
  if (screenup.innerHTML.slice(-1) == "+") {
    screendown.innerHTML = parseFloat(
      screenup
        .innerHTML(+screenup.innerHTML.slice(0, -1) + +screendown.innerHTML)
        .toFixed(2)
    );
  }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//! Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  hour.textContent = currentHour.toString();
  minute.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
