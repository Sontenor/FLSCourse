new Swiper('.swiper',{
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".swiper"
	},
	autoHeight: false,
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
});
