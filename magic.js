$(document).ready(function() {

	//configuration
	var width = 600;
	var animationSpeed = 1000;
	var pause = 2500;
	var currentSlide = 1;

	//cache DOM - very efficient code. Only searching the DOM for #slider.
	var $slider = $("#slider");
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var interval;

	//mouse enters the slider
	$slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider);

	//start slider function
	function startSlider() {
		interval = setInterval(function(){
			$slideContainer.animate({
				"margin-left": "-="+ width +"px"},
				animationSpeed, function() {
				currentSlide ++;
				if (currentSlide == $slides.length) {
					currentSlide = 1;
					$slideContainer.css("margin-left", 0);
				}
			});
		}, pause);
	};

	//stop slider function
	function pauseSlider() {
		clearInterval(interval);
	}

	//call the startslider function to start the slider.. duh
	startSlider();

});