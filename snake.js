"use strict";
(function () {
	class Snake {
		constructor(game, startX = 0, startY = 0) {
			this.x = this.startX = startX;
			this.y = this.startY = startY;
			this.xspeed = 1;
			this.yspeed = 0;
			this.total = 0;
			this.tail = [];

			this.game = game;
			this.drawing = game.drawing;
			this.scl = game.scl;

		}

		eat(pos) {
			let dst = this.game.dist(this.x, this.y, pos.x, pos.y);
			if (dst < 1) {
				this.total++;
				return true;
			} else {
				return false;
			}
		}

		dir(x, y) {
			if (this.xspeed == -x || this.yspeed == -y) { // prevent moving back
				return;
			}
			this.xspeed = x;
			this.yspeed = y;
		}

		respawn() {
			this.total = 0;
			this.tail = [];
			this.x = this.startX;
			this.y = this.startY;
			this.xspeed = 1;
			this.yspeed = 0;
		}

		death() {
			for (let i = 0; i < this.tail.length; i++) {
				let pos = this.tail[i];
				let dst = this.game.dist(this.x, this.y, pos.x, pos.y);
				if (dst < 1) {
					console.log("Game Over");
					this.respawn();
					return;
				}
			}
		}

		update() {
			if (this.total > 0) {
				if (this.tail.length > 0 && this.total === this.tail.length) {
					this.tail.shift();
				}
				let x = this.x;
				let y = this.y;
				this.tail.push({x, y});
			}

			this.x += this.xspeed * this.scl;
			this.y += this.yspeed * this.scl;

			// boundaries checking
			if (this.x < 0 || this.x > this.game.width || this.y < 0 || this.y > this.game.height) {
				this.respawn();
			}
		}

		draw() {
			for (let i = 0; i < this.tail.length; i++) {
				this.drawing.rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
			}
			// head
			this.drawing.rect(this.x, this.y, this.scl, this.scl);
		}
	}

	window.SnakeGame.Snake = Snake;
})();