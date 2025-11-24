// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if ((i + j) % 2 == 0) {
        fill(255, 255, 255);
      }
      else {
        fill(105, 105, 105);
      }
      rect(size * i, size * j, size, size);

      if ((i + j) % 2 != 0 && size * j < 75) {

        fill(255, 0, 0);
        ellipse(size * i + size / 2, size * j + size / 2, size - 5);
      }
      if ((i + j) % 2 != 0 && size * j > 100) {
        fill(0, 0, 0);
        ellipse(size * i + size / 2, size * j + size / 2, size - 5);
      }

    }
  }
}