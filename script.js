var i = 30;
var input = document.getElementById("input");
var input1 = document.getElementById("input1");
var p = document.getElementById("p");

var count = setInterval(function say() {
    i--;
    if (i == 0) {
        input.style.visibility = "hidden";
        input1.style.visibility = "hidden";
        clearInterval(count);
    }
    p.innerHTML = i;
}, 1000);

document.getElementById("submit").addEventListener("click", function() {
    if (input.value != " " && input1.value != " ") {
        clearInterval(count);
    }
})