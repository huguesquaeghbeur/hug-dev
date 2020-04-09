const image = document.getElementById('image');

function applicate() {

    image.style.backgroundColor = String(document.getElementById('input1').value);
    image.style.width = String(document.getElementById('input2').value) + "px";
    image.style.height = String(document.getElementById('input3').value) + "px";
    image.style.marginLeft = String(document.getElementById('input4').value) + "px";
    image.style.marginTop = String(document.getElementById('input5').value) + "px";
}
