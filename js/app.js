//! TIMER
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const display = document.querySelector(".display");
// hour.textContent = "18";

const ac = document.querySelector(".ac");
const pm = document.querySelector(".pm");
const percent = document.querySelector(".percent");

const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const equal = document.querySelector(".equal");

const decimal = document.querySelector(".decimal");
const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");
const numberArray = [
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
];

//! Functions

const handleNumberClick = (numStr) => {
  //   console.log(numStr);
  const currentDisplayStr = display.textContent;
  if (currentDisplayStr === "0") {
    display.textContent = numStr;
  } else {
    display.textContent = parseFloat(
      currentDisplayStr + numStr
    ).toLocaleString();
  }
};

//! Add Event Listener to numbers and buttons
for (let i = 0; i < numberArray.length; i++) {
  const number = numberArray[i];
  number.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}

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
