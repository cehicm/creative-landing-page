(function () {
	$(".nav-menu__icon").on("click", function () {
		$(this).nextAll().slideToggle("slow");
	});
})(jQuery);
