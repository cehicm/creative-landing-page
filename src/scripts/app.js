(function () {
	const menuIcon = $(".nav-menu__icon");
	$(menuIcon).on("click", function () {
		const headerContent = $(".header-content");

		menuIcon.nextAll().toggle();
		headerContent.toggle();
	});
})(jQuery);
