let expression = "";

function press(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    expression = cal(expression);
    document.getElementById("display").value = expression;
  } catch {
    document.getElementById("display").value = "Error!";
    expression = "";
  }
}

function twoNum(str) {
  console.log("I Am twoNum");
let op = "";
let n1 = "";
let n2 = "";
  let i = 0;

  for (i; i < str.length; i++) {
    if (
      !(str[i] === "+" || str[i] === "*" || str[i] === "-" || str[i] === "/")
    ) {
      n1 += str[i];
    } else {
      op = str[i];
      break;
    }
  }
  // console.log(i);
  for (let j = i + 1; j < str.length; j++) {
    n2 += str[j];
  }

  console.log("values n1 = " + n1);
  console.log("values op = " + op);
  console.log("values n2 = " + n2);

    return {
    n1: Number(n1),
    op,
    n2: Number(n2)
  };
}

function cal(str) {
  const { n1, op, n2 } = twoNum(str);

  switch (op) {
    case "+":
      return n1 + n2;

    case "-":
      return n1 - n2;

    case "*":
      return n1 * n2;

    case "/":
      return n1 / n2;

    default:
      throw new Error("Invalid operator");
  }
}

// ------------------------------------------------------------------------
// This Code is for Keybord input
// ------------------------------------------------------------------------
function press(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    press(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Escape") {
    clearDisplay();
  }

  if (key === "Backspace") {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
  }
});



// ------------------------------------------------------
//  This Logic Is only for terminal execution

// console.log("Faulty Calculator");

// function cal(num1, num2, op) {
//   let random = Math.random();
//   console.log(random);
//   if (random <= 0.1) {
//     switch (op) {
//       case "+":
//         console.log(num1 + num2);
//         break;
//       case "-":
//         console.log(num1 - num2);
//         break;
//       case "*":
//         console.log(num1 * num2);
//         break;
//       case "/":
//         console.log(num1 / num2);
//         break;
//       default:
//         console.log("Something Went's Wrong!");
//     }
//   } else {
//     switch (op) {
//       case "+":
//         console.log(num1 - num2);
//         break;
//       case "-":
//         console.log(num1 / num2);
//         break;
//       case "*":
//         console.log(num1 + num2);
//         break;
//       case "/":
//         console.log(num1 ** num2);
//         break;
//       default:
//         console.log("Something Went's Wrong!");
//     }
//   }
// }

// cal(3, 3, "+");
