function setup() {
    createCanvas()
    windowResized()

    noStroke()
    fill('red')
    rectMode(CENTER)
}

function draw() {
    background('black')

    push()
    translate(mouseX, mouseY)
    rotate(frameCount * 0.05)
    rect(0, 0, 100)
    pop()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
