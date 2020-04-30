let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('s-active', direction);
  })
}

function showItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('s-active');
    isEnabled = true;
    if (currentItem==1) {
      document.querySelector('.slider').classList.add('blue');
    }
    else {
      document.querySelector('.slider').classList.remove('blue');
    }
  })
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.left').addEventListener('click', function() {
    if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

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