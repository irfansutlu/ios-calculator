const mainDiv = document.querySelector(".main");
const screen = document.querySelector("#screen");

let screenValue = "0";
let firstValue = null;
let operator = null;
let haveSecondValue = false;

uptadeScreen();

function uptadeScreen() {
  screen.innerText = screenValue;
}

mainDiv.addEventListener("click", (e) => {
  const numberArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  const item = e.target;
  if (!item.id) return;
  for (numbers of numberArr) {
    if (item.id.includes(numbers)) {
      inputNumber(item.innerText);
      uptadeScreen();
    }
    if (item.id == "dot") {
      inputDecimal();
      uptadeScreen();
    }
    if (item.id == "delete") {
      clear();
      uptadeScreen();
    }
    if (
      item.id == "plus" ||
      item.id == "minus" ||
      item.id == "equal" ||
      item.id == "percent" ||
      item.id == "cross" ||
      item.id == "division"||
      item.id == 'pos-neg'
    ) {
      mathOperator(item.innerText);
      uptadeScreen()
    }
  }
});

function mathOperator(operator) {
  const value = parseFloat(screen.innerText);

  if(operator && haveSecondValue){
    operator = operator
    return
  }
  
  if (firstValue === null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);
    screenValue = `${parseFloat(result.toFixed(6))}`;
    firstValue = result;
  }
  
  haveSecondValue = true;
  operator = operator;
  console.log(firstValue, value, operator);
}
function calculate(first, second, operator) {
  if (operator === "+") {
    return first + second;
  } else if (operator ==="-") {
    return first - second;
  } else if (operator === "x") {
    return first * second;
  } else if (operator === "÷") {
    return first / second;
  } else if (operator === "%") {
    return (first * second) / 100;
  }else if (operator === "±"){
    return parseFloat(screen.innerText) * (-1);
  }
  return second;
}

function inputNumber(num) {
  if (haveSecondValue) {
    screenValue = num;
    haveSecondValue = false;
  } else {
    screenValue = screenValue === "0" ? num : screenValue + num;
  }
}

function inputDecimal() {
  if (!screenValue.includes(".")) {
    screenValue += ".";
  }
}

function clear() {
  screenValue = "0";
  firstValue=0
  value=0
}
