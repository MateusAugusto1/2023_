let input = document.getElementById('input');

function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  let expression = input.value;
  let result = eval(expression);
  input.value = result;
}