// test if element is in viewport
$.fn.isOnScreen = function(el){
	var element = this.get(0);
	var bounds = element.getBoundingClientRect();
	return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// why choose us slide ins
$(window).scroll(function() {
	if($(".whyus .row").isOnScreen() == true) {
		$(".whyus .row div.col").addClass("zoomIn");
} 
}).scroll();

// testemonial fade ins
$(window).scroll(function() {
	if($(".testimonials .animated").isOnScreen() == true) {
		$(".testimonials .animated").addClass("fadeIn");
} 
}).scroll();