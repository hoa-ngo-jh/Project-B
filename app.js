window.onscroll = function() {if (window.innerWidth >= 768) setStickyHeader()};

var navbar = document.getElementById('my-header-top');
var sticky = navbar.offsetTop;

function setStickyHeader() {
  if (window.pageYOffset >= 150) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

const myFunc = () => {
  const nav = document.getElementById('my-nav');
  const icon = document.getElementById('my-icon');

  if (nav.className === 'main-nav') {
    nav.className += ' responsive';

    icon.classList.remove('fa-bars');
    icon.className += ' fa-times';
  } else {
    nav.className = 'main-nav';

    icon.classList.remove('fa-times');
    icon.className += ' fa-bars';
  }
};