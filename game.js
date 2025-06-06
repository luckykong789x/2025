const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const keys = {
    left: false,
    right: false,
 xq6vdf-codex/web上でマリオ風ゲーム作成

    up: false
main
};

const gravity = 0.5;
const friction = 0.8;

class Player {
    constructor() {
        this.width = 20;
        this.height = 30;
        this.x = 50;
        this.y = canvas.height - this.height - 50; // start above ground
        this.velX = 0;
        this.velY = 0;
        this.jumping = false;
        this.speed = 2;
        this.color = '#ff0000';
xq6vdf-codex/web上でマリオ風ゲーム作成
        this.frame = 0; // used for simple leg animation
    }

    update() {
        this.frame++;

    }

    update() {
main
        // horizontal movement
        if (keys.left) {
            this.velX = -this.speed;
        } else if (keys.right) {
            this.velX = this.speed;
        } else {
            this.velX *= friction;
        }

        this.x += this.velX;

        // vertical movement
        this.velY += gravity;
        this.y += this.velY;

        if (this.y + this.height > canvas.height - 20) { // ground collision
            this.y = canvas.height - 20 - this.height;
            this.velY = 0;
            this.jumping = false;
        }

        // boundaries
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    }

    jump() {
        if (!this.jumping) {
            this.jumping = true;
            this.velY = -10;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
xq6vdf-codex/web上でマリオ風ゲーム作成
        // body
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // head
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y - 6, 6, 0, Math.PI * 2);
        ctx.fill();

        // simple leg animation using frame counter
        const legOffset = Math.sin(this.frame / 5) * 2;
        ctx.fillRect(this.x + 2, this.y + this.height, 4, 6 + legOffset);
        ctx.fillRect(this.x + this.width - 6, this.y + this.height, 4, 6 - legOffset);

        ctx.fillRect(this.x, this.y, this.width, this.height);
 main
    }
}

class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.fillStyle = '#654321';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const player = new Player();
const platforms = [
    new Platform(0, canvas.height - 20, canvas.width, 20), // ground
    new Platform(200, canvas.height - 100, 100, 20),
    new Platform(400, canvas.height - 150, 100, 20)
];

function handleInput(event, isKeyDown) {
xq6vdf-codex/web上でマリオ風ゲーム作成
    event.preventDefault();

main
    switch (event.code) {
        case 'ArrowLeft':
        case 'KeyA':
            keys.left = isKeyDown;
            break;
        case 'ArrowRight':
        case 'KeyD':
            keys.right = isKeyDown;
            break;
        case 'ArrowUp':
        case 'KeyW':
        case 'Space':
            if (isKeyDown) player.jump();
            break;
    }
}

document.addEventListener('keydown', (e) => handleInput(e, true));
document.addEventListener('keyup', (e) => handleInput(e, false));

function checkPlatformCollision(player, platform) {
    // AABB collision detection
    if (player.x < platform.x + platform.width &&
        player.x + player.width > platform.x &&
        player.y < platform.y + platform.height &&
        player.y + player.height > platform.y) {

        // simple top collision only
        if (player.velY >= 0 && player.y + player.height - player.velY <= platform.y) {
            player.y = platform.y - player.height;
            player.velY = 0;
            player.jumping = false;
        }
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();

    platforms.forEach(platform => {
        checkPlatformCollision(player, platform);
        platform.draw();
    });

    player.draw();

    requestAnimationFrame(update);
}

update();
