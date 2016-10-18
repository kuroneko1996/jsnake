"use strict";
(function () {

	class Game {

		constructor(drawing) {
			this.fps = 10;
			this.scl = 10;
			this.width = 640;
			this.height = 480;

			this.drawing = drawing;

			this.now = 0;
			this.then = Date.now();
			this.interval = 1000 / this.fps;
			this.delta = 0;
		}

		start() {
			var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	        this.OnEachFrame = requestAnimationFrame.bind(window); 

	        this.OnEachFrame(this.run.bind(this));
		}

		run() {
			this.OnEachFrame(this.run.bind(this));

			this.now = Date.now();
			this.delta = this.now - this.then;

			if (this.delta > this.interval) {
				this.then = this.now - (this.delta % this.interval);

				this.drawing.clear();
				this.logic();
			}
		}

		addKeydown(onkeydown) {
			document.addEventListener('keydown',    onkeydown,    false);
		}
	}

	window.SnakeGame = Game;
})();