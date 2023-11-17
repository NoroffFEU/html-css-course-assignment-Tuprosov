//burger functionality

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav--active');

    burger.blur();
  }
)

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// filter button in list html

let filterBtn = document.querySelector('.filter__btn');
let filterBox = document.querySelector('.filter');

filterBtn.addEventListener('click', function(){
    filterBox.classList.toggle('is-active');
})

document.addEventListener('click', function (event) {
    // Check if the click target is not the filter button or the filter box.
    if (event.target !== filterBtn && !filterBox.contains(event.target)) {
      // Click occurred outside of the filter box, so hide it.
      filterBox.classList.remove('is-active');
    }
});
