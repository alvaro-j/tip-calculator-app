var main = document.getElementsByTagName("MAIN")[0];
main.addEventListener("onload", load());

function load() {
  var input = document.getElementsByClassName("input")[0];
  var input2 = document.getElementsByClassName("input")[1];
  var btnReset = document.getElementById("btn-reset");

  main.style.backgroundColor = "red";
  if (input.value != 0 && input2.value != 0) {
    btnReset.style.backgroundColor = "red";
  }
}

load();

input.value = "0";
input2.value = "0";
