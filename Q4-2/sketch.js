// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;//10本
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;//棒1本分の横幅を計算
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){//棒グラフから折れ線グラフの値に変わっただけ
    const h = height * scores[i] / 100;
    const k = height * scores[i-1] / 100;
    const m = dx /2 ;
    const ex = dx *i + m;
    const ey = height - h;

    fill(0);
    ellipse(ex, ey, dx/5, dx / 5)

    if(i>0){px = dx * (i-1)  + m; py  = height - k;}
    line(px, py, ex, ey)
  }
}
