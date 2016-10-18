"use strict";
(function () {
	class Snake {
		constructor(game, x = 0, y = 0) {
			this.x = x;
			this.y = y;
			this.xspeed = 1;
			this.yspeed = 0;
			this.total = 0;
			this.tail = [];

			this.game = game;
			this.drawing = game.drawing;
			this.scl = game.scl;

		}

		eat() {
			let dst = 0;
			if (dst < 1) {
				total++;
				return true;
			} else {
				return false;
			}
		}

		dir(x, y) {
			this.xspeed = x;
			this.yspeed = y;
		}

		death() {
			for (let i = 0; i < this.tail.length; i++) {
				let pos = this.tail[i];
				let dst = 1;
				/*if (dst < 1) {
					console.log("Game Over");
					this.total = 0;
					this.tail = [];
					break;
				}*/
			}
		}

		update() {
			if (this.total > 0) {
				if (this.tail.length > 0 && this.total === this.tail.length) {
					this.tail.shift();
				}
				this.tail.push({x, y});
			}

			this.x += this.xspeed * this.scl;
			this.y += this.yspeed * this.scl;

			// boundaries checking

		}

		draw() {
			for (let i = 0; i < this.tail.length; i++) {
				drawing.rect(tail[i].x, this.tail[i].y, this.scl, this.scl);
			}
			// head
			this.drawing.rect(this.x, this.y, this.scl, this.scl);
		}
	}

	window.SnakeGame.Snake = Snake;
})();