const hamburger = document.querySelector('.loose');
const popUp = document.querySelector('.pop-up');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    popUp.classList.toggle('active-pop-up');
    closeIcon.classList.toggle('close');
}); closeIcon.addEventListener('click', () => {
    popUp.classList.toggle('active-pop-up'); closeIcon.classList.toggle('close');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.remove('show');
    });
});