//* =================================================
//*                     IOS CALCULATOR
//* =================================================
//? ekranlar

const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container");

let currOperand = "";
let previousOperand = "";
let operation = "";

//? Butonları taşıyan container için event tanımlama
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains("operator")) {
    chooseOperator(e.target.textContent);
    updateDisplay();
  }
});

const appendNumber = (num) => {
  //? ilk sayı 0 ise geri dön
  if (!currOperand && num === "0") return;

  //? Şu anki sayı '.' ise ve önceki girilen sayı '.' içeriyorsa geri dön
  if (num === "." && currOperand.includes(".")) return;
  if (currOperand.length > 10) return;
  //? Girilen sayıları birleştir
  currOperand += num;
};

const updateDisplay = () => {
  currDisp.textContent = currOperand;
  prevDisp.textContent = `${previousOperand}  ${operation}`;
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
      break;
  }

  currOperand = calculation;
};
