let input = document.querySelector("input");

let getValue = (event) => {
  input.value += event.target.innerText;
};

let calulate = () => {
  input.value = eval(input.value);
};

let clearScreen = () => {
  input.value = "";
};
