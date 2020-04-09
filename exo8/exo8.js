let tab = [-2, 1, 4];
let newTab = [];
let x = document.getElementById("input");
let show = document.getElementById("show");
let divs = document.getElementById("array");
let result = 2;

function add(){
    let sum = x.value - result;
    sum = sum * -1;
    show.innerHTML = sum + " + " + document.getElementById("input").value + " = " + result;
    for (let i = 0; i < tab.length; i++) {
        tab[i] += sum;
        delete tab[1];
    }
}

function afficher(){
    
    divs.innerHTML = tab;
}


