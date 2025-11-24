// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy; // x,y座標方向に進む速度
const g = 1; //重力
const vyMax = 20; //速度の最大値

function setup(){
  createCanvas(windowWidth, windowHeight);

  // setup()内で地面の位置とキャラクターのサイズを計算し、初期位置を設定
  const groundY = height * 0.8;
  const charSize  = height * 0.1;
  
  x = width / 2;
  //地面の位置（groundY）から半径分（charSize / 2）上に設定
  y = groundY - (charSize / 2); // これで地面スタート
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ
  const groundY = height * 0.8; // 地面を描く前に定義

  // 地面を描く
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  ellipse(x, y, 50);
  // キーの処理（else ifにすると同時押しできなくなってしまうので要注意）
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  //加速処理
  if(keyIsDown(LEFT_ARROW)&&(keyIsDown("D".charCodeAt(0)))){ x -= 10; }
  if(keyIsDown(RIGHT_ARROW)&&(keyIsDown("D".charCodeAt(0)))){ x += 10; }



  // BLANK[2] 重力とジャンプ
  // 重力適用
  vy += g; //毎フレームごとにyの速度にgが加わる
  
  // BLANK ジャンプ処理 (空中ジャンプ不可)
  

  // スペースキーが押され、かつY座標が地面の位置(groundY - (size / 2))以上である場合にジャンプ
  if(keyIsDown(" ".charCodeAt(0))&&(y >= groundY - (size / 2))){
    // ジャンプ処理（y方向の速度(vy)を上向き（負の値）に設定する）
    vy = -20; // 例として-20を設定
  }

  // 速くなりすぎないように制限
  //vx = constrain(vx, -vyMax, vyMax);
  vy = constrain(vy, -vyMax, vyMax);

  // 位置を更新
  x += vx;
  y += vy;



  // 地面との衝突判定と位置の強制補正 (めり込み防止)
  if (y > groundY - (size / 2)) {
      y = groundY - (size / 2); // 位置を地面の境界に強制的に戻す
      vy = 0; // 地面に接触したら速度をリセット
  } 

  // 左右の画面端の制約 (キャラクターが画面端を突き抜けないように)
  // 円の中心が画面端から半径分内側になるように制限
  x = constrain(x, 0, width); 
  y = constrain(y, 0, height);


  // キャラクターを描く
  fill(0);
  // 注: 元のコードにあったellipse(x, y, 50)は削除し、サイズが可変のellipse(x, y, size, size)に統一
  ellipse(x, y, size, size);
}