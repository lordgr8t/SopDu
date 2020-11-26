$(document).ready(function(){
	$('a.photo').zoom({url: 'log.jpg'});
});

$(document).ready(function(){
	$('a.photo').zoom({
		url: 'log.jpg', 
		callback: function(){
			$(this).colorbox({href: this.src});
		}
	});
});

// Animation 2
$('.anim2').hover(function(){
	$('.scr1').toggleClass('scr1_anim anim_sets')
	$('.scr2').toggleClass('scr2_anim anim_sets')
	$('.scrx').toggleClass('scrx_anim anim_sets')
});

// Phone mask
$(function(){
	$(".phone").mask("+7 999 999-99-99",{phonelaceholder:'+7 000 000-00-00'});
})
$(function() {
	$("#phone").mask("+7 999 999-99-99", {
		placeholder: "+7 999 999-99-99",
		clearIfNotMatch: true
	});
});


// Slider
$(document).ready(function(){
	$('.stages_slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
$(document).ready(function(){
	$('.members_slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
});

// Popup
// Initialize popup as usual
$('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});

$('.order_btn').hover(function(){
	$(this).next().toggleClass('order__img-wrap-hover')
});
