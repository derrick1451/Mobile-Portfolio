const hamburger = document.querySelector('.loose');
const popUp = document.querySelector('.pop-up');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-links');

hamburger.addEventListener('click', () => {
  popUp.classList.toggle('active-pop-up');
  closeIcon.classList.toggle('close');
});
closeIcon.addEventListener('click', () => {
  popUp.classList.toggle('active-pop-up');
  closeIcon.classList.toggle('close');
});
navLinks.forEach((nav) => {
  nav.addEventListener('click', () => {
    popUp.classList.remove('active-pop-up');
    closeIcon.classList.remove('close');
  });
});