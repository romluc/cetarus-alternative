// Navbar transparent to solid
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('#ul.nav').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	});
});
