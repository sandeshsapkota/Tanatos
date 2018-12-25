/************* show navigation  *************/

const menuIcon = document.querySelector('.header__menu');
const body = document.querySelector('body');

menuIcon.addEventListener('click', function() { // show navigation while clicking on hambergur icon
	body.classList.toggle('show--navigation');
});


/************* scrolling to down while clicking on circle-arrow *************/

 function ScrollTo(name) {
  ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() { ScrollToResolver(elem);}, "50");
  } else {
    elem.lastjump = null;
  }
}



/************* exit hire form *************/

const exitForm = document.querySelector('.hire__exit');
const hireBtn = document.querySelector('.hire--btn');

hireBtn.addEventListener('click', function() {
	body.classList.toggle('show__form');
});

exitForm.addEventListener('click', function() {
	body.classList.toggle('show__form');
});


/************* fixed navigation when scrolling *************/

window.onscroll = function() {
	body.classList.remove('show--navigation');
	if(window.scrollY >= 200) {
		body.classList.add('fixed--header');
	}else{
		body.classList.remove('fixed--header');
	}
}
 

/************* slick slider customization *************/

$(document).ready(function(){
	$('.slider__item--wrap').slick({
		prevArrow:' ',
	   	nextArrow:' ',
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
	 });
}); 

$(document).ready(function(){
	$('.client__list').slick({
		prevArrow:' <img src="img/client/arrow-prev.png" class="slick-arrow arrow-prev" alt="circle-arrow">',
	   	nextArrow:' <img src="img/client/arrow-next.png" class="slick-arrow arrow-next" alt="circle-arrow">',
		draggable: false,
	 });
}); 


$(document).ready(function(){
  $('.team__item').slick({
     arrows: false,
     slidesToShow: 4,
     dots: true,
     draggable: false,

     responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        margin: 0
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    } 
	  ]
});
}); 





