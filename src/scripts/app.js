(function () {
	const menuIcon = $(".nav-menu__icon");
	const headerContent = $(".header-content");
	$(menuIcon).on("click", function () {
		menuIcon.nextAll().slideToggle("slow");
		headerContent.toggle();
	});
})(jQuery);
