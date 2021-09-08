const SCREEN = document.getElementById("screen");
const buttonsContainers = document.getElementById("buttonsContainer");

let numberToOperate1;
let numberToOperate2;
let typeOperation;

buttonsContainers.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let temporalValue = SCREEN.textContent;

    function replaceComma() {
      if (temporalValue.includes(",")) {
        temporalValue = temporalValue.replace(",", ".");
      }
    }

    function saveValue() {
      SCREEN.textContent = "";

      replaceComma();

      temporalValue != "" ? (numberToOperate1 = parseFloat(temporalValue)) : (numberToOperate1 = 0);
    }

    switch (event.target.textContent) {
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
        numberToOperate1 = undefined;
        numberToOperate2 = undefined;
        break;

      case ".":
        SCREEN.textContent.includes(",") ? null : (SCREEN.textContent += ",");
        break;

      case "=":
        if (numberToOperate1 === undefined || numberToOperate2 === undefined) {
          SCREEN.textContent = "Error";
        }

        replaceComma();

        numberToOperate2 = parseFloat(temporalValue);

        switch (typeOperation) {
          case "+":
            SCREEN.textContent = numberToOperate1 + numberToOperate2;
            break;

          case "-":
            SCREEN.textContent = numberToOperate1 - numberToOperate2;
            break;

          case "x":
            SCREEN.textContent = numberToOperate1 * numberToOperate2;
            break;

          case "/":
            numberToOperate2 === 0 ? (SCREEN.textContent = "Error") : (SCREEN.textContent = numberToOperate1 / numberToOperate2);
            break;
        }
        break;

      default:
        SCREEN.textContent = "";
        SCREEN.textContent += event.target.textContent;
        break;
    }
  }
});
