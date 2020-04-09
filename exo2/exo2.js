let x = 600;
let y = 400;

function deplacer(dx, dy) {
    let bloc = document.getElementById("square");
    // on enregistre la nouvelle position
    x += dx;
    y += dy;
    // on place le bloc
    bloc.style.left = x + "px";
    bloc.style.top = y + "px";
}

window.onkeydown = function (e) {
    let key = e.keyCode || e.which;
    switch (key) {
        case 37:
            deplacer(-50, 0)
            break;
        case 39:
            deplacer(50, 0)
            break;
        case 38:
            deplacer(0, -50)
            break;
        case 40:
            deplacer(0, 50)
            break;
        default:
            break;
    }
};