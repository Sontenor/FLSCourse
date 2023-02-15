new Swiper('.swiper',{

	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
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
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
});