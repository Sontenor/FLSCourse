"use strict"

new Swiper('.swiper',{

	navigation: {
		nextEl:'.button-left',
		prevEl:'.button-right'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".swiper"
	},
	autoHeight: false,
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,

	breakpoints: {

		320: {
			slidesPerView: 1,
		},

		620: {
			slidesPerView: 2,
		},

		940: {
			slidesPerView: 3,
		}
	},
});

document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
		e.preventDefault();
	}

});



