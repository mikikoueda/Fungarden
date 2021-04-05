$(document).ready(function() {
	$('#topimage').flexslider({
		animation:'slide',
		slideshowspeed:2000,
		animationspeed:1000,
		controlNav:true,
	});
	$('#qoopon').flexslider({
		animation:'slide',
		slideshowspeed:1000,
		animationspeed:1000,
		controlNav:true,
	});



function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav1').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function() {
  hamburger();
} );
 } );   