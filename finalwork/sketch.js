// 最終課題を制作しよう
let balls = []; 

let g = 0.2;
let vyMax = 20;
const restitution = -0.8;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0, 50);

    // 止まったボールを削除
    balls = balls.filter(b => {
        const speed = sqrt(b.vx * b.vx + b.vy * b.vy);
        const r = b.size / 2;

        // 速度が小さくて床に触れている → 消す
        if (speed < 5 && b.y + r >= height) {
            return false;
        }
        return true;
    });

    // ボールの更新と描画
    for (let i = 0; i < balls.length; i++) {
        let b = balls[i];
        let r = b.size / 2;

        // 位置更新
        b.x += b.vx;
        b.y += b.vy;

        // 重力
        b.vy += g;
        b.vy = constrain(b.vy, -vyMax, vyMax);

        // 跳ね返り（半径を考慮）
        if (b.x - r < 0) {
            b.x = r;
            b.vx *= restitution;
        }
        if (b.x + r > width) {
            b.x = width - r;
            b.vx *= restitution;
        }
        if (b.y - r < 0) {
            b.y = r;
            b.vy *= restitution;
        }
        if (b.y + r > height) {
            b.y = height - r;
            b.vy *= restitution;
        }

        // 描画
        fill(b.color);
        noStroke();
        ellipse(b.x, b.y, b.size);
    }
}

function createBall(x, y, vx, vy) {
    return {
        x: x,
        y: y,
        size: random(10, 30),
        vx: vx,
        vy: vy,
        color: color(
            random(100, 255),
            random(100, 255),
            random(100, 255),
            180
        )
    };
}

function mouseDragged() {
    const dx = mouseX - pmouseX; 
    const dy = mouseY - pmouseY; 
    
    if (mag(dx, dy) > 5) { 
        let b = createBall(mouseX, mouseY, dx * 0.5, dy * 0.5);
        balls.push(b); 
    }
}
