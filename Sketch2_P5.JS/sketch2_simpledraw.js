function setup() {
    createCanvas(500, 500);
   strokeWeight(10)
   stroke(0);
}

function touchMoved() {
   line(mouseX, mouseY, pmouseX, pmouseY);
   return false;
}
