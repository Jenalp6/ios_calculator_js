//* =================================================
//*                     IOS CALCULATOR
//* =================================================

//? saat

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
//? ekranlar

const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container");

let currOperand = "";
let previousOperand = "";
let operation = "";

let equalOrPercentPressed = false;

//? Butonları taşıyan container için event tanımlama
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    //? Herhangi bir sayi(num) sayiya tiklanildi ise
    appendNumber(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains("operator")) {
    //? Herhangi bir operator butonuna (+,-,x,/) tiklanildi ise
    chooseOperator(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains("equal")) {
    //? Esittir butonuna tiklanildi ise
    calculate();
    updateDisplay();
    equalOrPercentPressed = true;
  }
  if (e.target.classList.contains("ac")) {
    //? AC butonuna tiklanildi ise
    previousOperand = "";
    currOperand = "";
    operation = "";
    updateDisplay();
  }
  if (e.target.classList.contains("pm")) {
    //? PM butonuna tiklanildi ise
    if (!currOperand) return;
    currOperand *= -1;
    updateDisplay();
  }
  if (e.target.classList.contains("percent")) {
    //? Percent butonuna tiklanildi ise
    if (!currOperand) return;
    currOperand = currOperand / 100;
    updateDisplay();
    equalOrPercentPressed = true;
  }
});

const appendNumber = (num) => {
  //? ilk sayı 0 ise geri dön
  if (currOperand === "0" && num === "0") return;

  //? Eğer ilk olarak 0 girilmisse ve sonrasinda da . haricinde baska
  //? bir sayi girilmis ise sadece girilen yeni sayiyi degiskene aktar.
  //? Orn: 09 => 9 , 03 => 3 , 0.1 => 0.1
  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    return;
  }

  //? Şu an ki sayı '.' ise ve önceki girilen sayı '.' içeriyorsa geri dön
  if (num === "." && currOperand.includes(".")) return;

  if (currOperand.length > 10) return;

  if (equalOrPercentPressed) {
    currOperand = num;
    equalOrPercentPressed = false;
    return;
  }

  //? Girilen sayıları birleştir
  currOperand += num;
};

const updateDisplay = () => {
  if (currOperand.toString().length > 11) {
    currOperand = Number(currOperand).toExponential(3); // toExponential sayı basamağı arttığında exponential (noktadan sonra kaç karakter(3) +9.990e+11 )
  }
  currDisp.textContent = currOperand;

  //! Eger bir sayiya basilmadan operator butonlarina basilirsa
  //! prevDisp'de operatoru gostermeme
  if (operation && previousOperand) {
    prevDisp.textContent = `${previousOperand} ${operation}`;
  } else {
    prevDisp.textContent = "";
  }
};

const chooseOperator = (op) => {
  //? ilk sayı girişinden sonraki işlemleri gerçekleştirme
  if (previousOperand) {
    calculate();
  }
  operation = op;
  previousOperand = currOperand;
  currOperand = "";
};

const calculate = () => {
  let calculation = 0; // or calculation;
  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "x":
      calculation = prev * current;
      break;
    case "÷":
      calculation = prev / current;
      break;
    default:
      return;
  }

  currOperand = calculation;

  //? Esittir butonuna tiklanildiginda ekranda gozukmemesi icin
  //? previousOperand ve operation'ı silmemiz gerekir
  previousOperand = "";
  operation = "";
};

//set up the time
const updateTime = () => {
  const currentTime = new Date();

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  hour.textContent = currentHour.toString();
  minute.textContent = currentMinute.toString();
};

setInterval(updateTime, 1000);
updateTime();
