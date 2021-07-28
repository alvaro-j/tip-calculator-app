var input = document.getElementsByClassName('input');
var i;
if (input.length != 0) {
    for (i = 0; i < input.length; i++) {
        input[i].value = '0'
    } 
} else {
    alert(input.innerHTML)
}
