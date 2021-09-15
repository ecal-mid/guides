function setup() {
    createCanvas()
    windowResized()
}

function draw() {
    background('black')

    push()

    pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
