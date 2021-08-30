var input = document.getElementsByClassName("input")[0];
input.value = '';
var input2 = document.getElementsByClassName("input")[1];
input2.value = '';
var bill = document.getElementById("bill");
bill.addEventListener("input", setBillValue);
var tipBtns = document.querySelectorAll('.span-percent')
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
})
var btnReset = document.getElementById("btn-reset");

var billValue = 0.0;

function handleClick() {
    
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',' , '.');
    }
    billValue = parseFloat(bill.value);
    console.log(billValue);
}

