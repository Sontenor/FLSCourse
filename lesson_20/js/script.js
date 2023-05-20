

"use strict"

new Swiper('.product__swiper',{

	navigation: {
		nextEl:'.button__left-featured',
		prevEl:'.button__right-featured'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".product__swiper"
	},
	autoHeight: false,
	slidesPerView: 5,
	spaceBetween: 30,
	loop: true,

	breakpoints: {

		320: {
			slidesPerView: 1,
		},

		528: {
			slidesPerView: 2,
		},

		792: {
			slidesPerView: 3,
		},

		1125: {
			slidesPerView: 5,
		}
	},

});

new Swiper('.product__swiper-popular',{

	navigation: {
		nextEl:'.button__left-popular',
		prevEl:'.button__right-popular'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".product__swiper-popular"
	},
	autoHeight: false,
	slidesPerView: 5,
	spaceBetween: 30,
	loop: true,

	breakpoints: {

		320: {
			slidesPerView: 1,
		},

		528: {
			slidesPerView: 2,
		},

		792: {
			slidesPerView: 3,
		},

		1125: {
			slidesPerView: 5,
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