(function($) {
	$(document).ready(function() {
		"use strict";
		
	

		$(".project-box").hover(function () {
        // change hovered div background to yellow:
         $(".works").css("background-color", $(this).data('bg'));
        // loop through the rest of the divs with the same class:
        $(".works").not(this).each(function(){
            // change their background color according to their 'data-color' attribute:
            $(this).css("background-color", $(this).data('bg'));
        });
       // set hover out method:
    }, function(){
        // change each 'box' background color to default:
        $(".works").css("background-color", '');
    });	
		
		
		
		
		// TYPEWRITER
			$("#typewriter").typewriter({
				prefix : "",
				text : ["Please wait", "Still loading", "Almost done"],
				typeDelay : 100,
				waitingTime : 1500,
				blinkSpeed : 800
			});
		
		
		// SLIDER
			var swiper = new Swiper('.swiper-slider', {
			speed: 600,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + '</span>';
				},
			},
			});
	
		
	
		// EQUALIZER TOGGLE
			var source = "audio/audio.mp3";
			var audio = new Audio(); // use the constructor in JavaScript, just easier that way
			audio.addEventListener("load", function() {
			  audio.play();
			}, true);
			audio.src = source;
			audio.autoplay = true;
			audio.loop = true;
			audio.volume = 0.2;
		

			$('.equalizer').click();		
			var playing = true;		
			$('.equalizer').on('click', function(e) {
				if (playing == false) {
			  audio.play();
					playing = true;

				} else {
					audio.pause();
					playing = false;
				}
			});
	
	
		// EQUALIZER
				function randomBetween(range) {
					var min = range[0],
						max = range[1];
					if (min < 0) {
						return min + Math.random() * (Math.abs(min)+max);
					}else {
						return min + Math.random() * max;
					}
				}

				$.fn.equalizerAnimation = function(speed, barsHeight){
					var $equalizer = $(this);
					setInterval(function(){
						$equalizer.find('span').each(function(i){
						  $(this).css({ height:randomBetween(barsHeight[i])+'px' });
						});
					},speed);
					$equalizer.on('click', function(e) {
						$equalizer.toggleClass('paused');
					});
				}

				var barsHeight = [
				  [8, 22],
				  [5, 10],
				  [11, 8],
				  [1, 27],
				  [9, 1],
				  [16, 3]
				];
				$('.equalizer').equalizerAnimation(250, barsHeight);
	
		// HAMBURGER AUDIO
			document.getElementById("hamburger-menu").addEventListener('click', function(e) {
			document.getElementById("hamburger-hover").play();
	  	});
		
		
	
		// DATA BACKGROUND IMAGE
			var pageSection = $(".bg-image");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-image", "url(" + $(this).data("background") + ")");
				}
			});
	
	
		
	
		
		
		
	
		
		
		// PAGE HEADER FADE
			var divs = $('header');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 'opacity' : (1 - st/700) });
				divs.css({ 'transition-delay' : ("0s") });
				divs.css({ 'transition' : ("0.05s ease-in-out") });
			});

		
		
		
		});
	// END JQUERY	
	
	
	
	
		// WOW ANIMATION 
			wow = new WOW(
				{
					animateClass: 'animated',
					offset:       0
				}
				);
			wow.init();
	
	
		// PRELOADER
			$(window).load(function(){
				$("body").addClass("page-loaded");	
			});
	
		// COUNTER
			 $(document).scroll(function(){
				$('.odometer').each( function () {
					var parent_section_postion = $(this).closest('section').position();
					var parent_section_top = parent_section_postion.top;
					if ($(document).scrollTop() > parent_section_top - 300) {
						if ($(this).data('status') == 'yes') {
							$(this).html( $(this).data('count') );
							$(this).data('status', 'no')
						}
					}
				});
			});
	
	
	
})(jQuery);	