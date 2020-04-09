function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let context = canvas.getContext("2d");

        context.beginPath(); 
        context.arc(530, 60, 50, 0, Math.PI * 2); 
        context.fillStyle = 'yellow';
        context.fill();

        context.beginPath(); 
        context.arc(530, 60, 40, 0, Math.PI); 
        context.strokeStyle = 'black';
        context.stroke();

        context.beginPath(); 
        context.arc(510, 45, 10, 0, Math.PI * 2);
        context.fillStyle = 'black';
        context.fill();

        context.beginPath(); 
        context.arc(550, 45, 10, 0, Math.PI * 2);
        context.fillStyle = 'black';
        context.fill();

        context.beginPath();
        context.arc(115, 90, 50, 0, Math.PI * 2);
        context.lineWidth = 5;
        context.strokeStyle = 'red';
        context.stroke();
    }
}



