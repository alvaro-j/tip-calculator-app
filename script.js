var input = document.getElementsByClassName("input")[0];
input.value = '';
var input2 = document.getElementsByClassName("input")[1];
input2.value = '';
var bill = document.getElementById("bill");
bill.addEventListener("input", setBillValue);
var tipBtns = document.querySelectorAll('.span-percent')
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);
})
var tipCustom = document.querySelector('.span-custom');
tipCustom.value = '';
tipCustom.addEventListener('input', setTipCustomValue);
var person = document.querySelector('.input-person');
person.addEventListener('input', setPersonValue);
var errorMsg = document.querySelector('.error-msg');
var results = document.querySelectorAll('.value');


var btnReset = document.getElementById("btn-reset");

var billValue = 0.0;
var tipValue = 0.15;
var personValue = 1;

function handleClick(event) {
    tipBtns.forEach(btn => {
        btn.classList.remove('btn-active');

        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
        }
    });
    tipCustom.value = '';
    console.log(tipValue);
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',' , '.');
    }
    billValue = parseFloat(bill.value);

    calculateTip();

}

function setTipCustomValue() {
    tipValue = parseFloat(tipCustom.value/100);

    tipBtns.forEach(btn => {
        btn.classList.remove('btn-active');
    });

    console.log(tipValue);
}

function setPersonValue() {
    personValue = parseFloat(person.value);
    console.log(personValue);
    if(personValue <= 0) {
        errorMsg.classList.add('show-error-msg');
        setTimeout(function () {
            errorMsg.classList.remove('show-error-msg');
        }, 3000);
    }
}

function calculateTip() {
    if (persoValue >= 1) {
        var tipAmount = billValue * tipValue / personValue;
        var total = billValue * (tipValue + 1) / personValue;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML =  '$' + total.toFixed(2);
    }
}
