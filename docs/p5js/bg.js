function windowResized() {
    resizeCanvas(windowWidth, windowHeight,WEBGL);//3Dの場合は引数にWEBGLを忘れずに！
    background(0, 0);//再描画後に背景を再描画する
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);//2Dの場合は引数にWEBGLは要らない
    canvas.position(0,0);//canvasをページの原点に固定
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background(0, 0);
    fill(0, 0, 255, 100);
}
function draw() {
    frameRate(30);
    background(0, 0);
    ellipse(mouseX-(width/2), mouseY-(height/2), 50, 50);
}