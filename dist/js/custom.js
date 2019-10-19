// Navbar transparent to solid
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.navbar-container').addClass('solid');
		} else {
			$('.navbar-container').removeClass('solid');
		}
	});
});
