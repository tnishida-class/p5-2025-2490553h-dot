// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数（定数）
let count = 0; // 現在のフレーム数（変数）
let size = 50;

function setup(){
  createCanvas(windowWidth, windowHeight); // キャンバスの大きさをウィンドウの大きさと同じにする
}

function windowResized(){ // ウィンドウがリサイズされるたびに呼び出される関数
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}

function draw(){
  background(160, 192, 255); //前回の描画を消し、アニメーションに見せるためにこの位置に書き、上塗りする。
  count = (count + 1) % cycle; // BLANK[2] let speed = 1; // アニメーションの速さ count = (count + speed) % cycle;とすることも可
  if (keyIsPressed) {
    count = (count + 2) % cycle; //2はスピード
  }
  if (count < cycle / 2) {
    size += 1;
  } else {
    size -= 1;
  }
  ellipse(width / 2, height / 2, size, size); // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
}