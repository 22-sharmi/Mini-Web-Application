let outputScreen = document.getElementById("outputValue");

function display(num) {
  outputScreen.value += num;
}

function cancel() {
  outputScreen.value = "";
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    outputScreen.value = "Error";
  }
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
