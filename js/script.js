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

$('.anim2').hover(function(){
	$('.scr1').toggleClass('scr1_anim anim_sets')
	$('.scr2').toggleClass('scr2_anim anim_sets')
	$('.scrx').toggleClass('scrx_anim anim_sets')
});
