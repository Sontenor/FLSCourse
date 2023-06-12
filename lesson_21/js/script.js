document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
		e.preventDefault();
	}

});

document.addEventListener("click", function (e) {
	const targetElement = e.target;

	if (targetElement.closest('.form__button')) {
		document.documentElement.classList.toggle('search-open');
		e.preventDefault();
	}

})