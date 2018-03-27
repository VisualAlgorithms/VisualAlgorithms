const canvasDiv = document.getElementById('p5-canvas');
let time = 0;

function setup() {
    const canvas = createCanvas(canvasWidth(), canvasHeight());
    canvas.parent("p5-canvas");
    background(0);
}

function draw() {
    background(0);
    const halfHeight = height / 2;
    const halfWidth = width / 2;
    const circleDiameter = halfHeight / 5;
    const circleRadius = circleDiameter / 2;

    translate(halfWidth, halfHeight);

    ellipse(
        (halfWidth - circleRadius) * Math.cos(time),
        (halfHeight - circleRadius) * Math.sin(time),
        circleDiameter,
        circleDiameter
    );

    time += 0.01;
    time %= 2 * Math.PI;
}

function windowResized() {
    resizeCanvas(canvasWidth(), canvasHeight());
}

const canvasWidth = () => canvasDiv.offsetWidth - 30;
const canvasHeight = () => canvasDiv.offsetHeight - 7;
