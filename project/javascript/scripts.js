const SCREEN = document.getElementById("screen");
const buttons = Array.from(document.querySelectorAll("button"));

let numberToOperate1;
let numberToOperate2;
let typeOperation;

// quita el forEach
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    let temporalValue = SCREEN.textContent;

    function saveValue() {
      SCREEN.textContent = "";
      temporalValue != "" ? (numberToOperator1 = parseInt(temporalValue)) : (numberToOperate1 = 0);
    }

    switch (item.textContent) {
      case "+":
        saveValue();
        typeOperation = "+";
        break;

      case "-":
        saveValue();
        typeOperation = "-";
        break;

      case "x":
        saveValue();
        typeOperation = "x";
        break;

      case "/":
        saveValue();
        typeOperation = "/";
        break;

      case "del":
        SCREEN.textContent = SCREEN.textContent.replace(SCREEN.textContent.slice(-1), "");
        break;

      case "reset":
        SCREEN.textContent = "";
        break;

      case ".":
        SCREEN.textContent.includes(",") ? null : (SCREEN.textContent += ",");
        break;

      case "=":
        numberToOperator2 = parseFloat(temporalValue);

        switch (typeOperation) {
          case "+":
            SCREEN.textContent = numberToOperator1 + numberToOperator2;
            break;

          case "-":
            SCREEN.textContent = numberToOperator1 - numberToOperator2;
            break;

          case "x":
            SCREEN.textContent = numberToOperator1 * numberToOperator2;
            break;

          case "/":
            SCREEN.textContent = numberToOperator1 / numberToOperator2;
            break;
        }
        break;

      default:
        SCREEN.textContent += item.textContent;
        break;
    }
  });
});

// poner un mensaje de error cuando de divida entre 0
// poner un mensaje de error cuando de NaN
// arreglar las operaciones con ,
