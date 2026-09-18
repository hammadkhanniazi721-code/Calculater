let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "AC") {
      string = "";
      input.value = "";
    }

    else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    }

    else if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    }

    else if (value === "%") {
      try {
        string = eval(string) / 100;
        input.value = string;
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    }

    else {
      string = string + value;
      input.value = string;
    }
  });
});