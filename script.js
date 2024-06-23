const primaryNav = document.querySelector('.navbar__list');
const navToggle = document.querySelector('.mobile-navbar-toggle');
const headerImg = document.querySelector('.header__img');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

function checkScreenWidth() {
  if (window.innerWidth >= 450) {
    // Change 600 to your desired breakpoint in pixels
    headerImg.className = 'flex__threeItem--1'; //
  } else {
    headerImg.className = 'flex__threeItem--2'; // Default class for small screens
  }
}

//BACK TO TOP BUTTON//
function back_to_top() {
  var link = document.getElementById('back-to-top');
  var amountScrolled = 30;

  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > amountScrolled) {
      link.classList.add('showop');
    } else {
      link.className = 'back-to-top';
    }
  });

  link.addEventListener('click', function (e) {
    e.preventDefault();

    var distance = 0 - window.pageYOffset;
    var increments = distance / (500 / 16);
    function animateScroll() {
      window.scrollBy(0, increments);
      if (window.pageYOffset <= document.body.offsetTop) {
        clearInterval(runAnimation);
      }
    }
    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
  });
}
