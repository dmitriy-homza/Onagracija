	window.onload = function() {
        document.getElementById("preloader").classList.add('loaded');
		setTimeout(function() {
			document.getElementById("preloader").style.display = "none";

		}, 400);

	};

	//Бургер
let burgerIcon = document.querySelector('header img');
burgerIcon.addEventListener('click', function() {
  if (burgerIcon.getAttribute('class')=='rotate') {
    isNotBurger();
  }
  else {
    isBurger();
  }

})

document.querySelector('.burger-overflow-hidden').addEventListener('click', function() {
  isNotBurger();
});

function isBurger () {
  burgerIcon.classList.add('rotate');
  setTimeout(() => document.querySelector('.logo').classList.add('opacity'),00);
  document.querySelector('nav').classList.add('menu-active');
  document.querySelector('.burger-overflow-hidden').classList.add('burger-overflow-animation');
  setTimeout(() => document.querySelector('.burger-overflow-hidden').classList.add('burger-overflow'),100);
}

function isNotBurger () {
  burgerIcon.classList.remove('rotate');
  document.querySelector('nav').classList.remove('menu-active');
  setTimeout(() => document.querySelector('.logo').classList.remove('opacity'),300);
  document.querySelector('.burger-overflow-hidden').classList.remove('burger-overflow');
  setTimeout(() => document.querySelector('.burger-overflow-animation').classList.remove('burger-overflow-animation'),500);
}
	  
//Обрезка копыт форма
var $input = $('.form-fieldset > input');

$input.blur(function (e) {
  $(this).toggleClass('filled', !!$(this).val());
});