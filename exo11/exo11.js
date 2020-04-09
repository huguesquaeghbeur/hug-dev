let result = 0;
let array = [];
let input = document.getElementById("input");

function multi() {
    for (let i = 1; i <= 10; i++) {
        result = input.value * i;
        newElt = document.createElement("tr");
        document.getElementById("table").appendChild(newElt);
        newElt.innerHTML = input.value + " x " + i + " = " + result;
    }

}