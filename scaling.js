"use strict";
(function () {
	var dpr = 1;
	if(window.devicePixelRatio !== undefined) {
	    dpr = window.devicePixelRatio;
	}
	var screen_width = window.screen.width * dpr;

	if (document.documentElement.clientWidth < 640 && screen_width >= 1080) {
		var viewport = document.querySelector("meta[name=viewport]");
		viewport.setAttribute('content', 'width=640, user-scalable=0');
	}
})();
