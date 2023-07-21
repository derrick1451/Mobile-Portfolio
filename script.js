const hamburger = document.querySelector('.loose');
const popUp = document.querySelector('.pop-up');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-links');
const container = document.querySelector('.projects');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.over-lay');

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
const cards = [{
  id: 1,
  image: 'images/capstone.png',
  title: 'Capstone',
  paragraph: "The capstone1 project, showcases a website about an event called Young Dev's Global summit.Built with Html,CSS and JavaScript",
  canopy: 'CAPSTONE',
  stack: 'Front End',
  year: '2023',
  technology: ['Html', 'CSS', 'Javascript'],
  button: 'See Project',
  source: 'https://github.com/derrick1451/Capstone1',
  live: 'https://derrick1451.github.io/Capstone1/',
},
{
  id: 2,
  image: 'images/cal.png',
  title: 'Math-Magician',
  paragraph: 'math-magician is a single page app made with react thats helps a user to make simple calculation with the calculator and also display random quotes.',
  canopy: 'REACT',
  stack: 'Front End',
  year: '2023',
  technology: ['React', 'css', 'React-router'],
  button: 'See Project',
  source: 'https://github.com/derrick1451/math-magician',
  live: 'https://math-magician-7wfm.onrender.com/',
},
{
  id: 3,
  image: 'images/bookstore.png',
  title: 'Book Store',
  paragraph: 'Bookstore is a web app that allows users to add a book, remove a selected book and display list of books.',
  canopy: 'REACT-APP',
  stack: 'Full Stack Dev',
  year: '2023',
  technology: ['React', 'css', 'React-router'],
  button: 'See Project',
  source: 'https://github.com/derrick1451/bookstore',
  live: 'https://bookstore-hynh.onrender.com/',
},
{
  id: 4,
  image: 'images/crop.png',
  title: 'Todo List',
  paragraph: 'This is a basic todo List application.Users can Edit,Update and Delete todos.Built with Html,CSS,Webpack and JavaScript.',
  canopy: 'TODO',
  stack: 'Full Stack Dev',
  year: '2023',
  technology: ['html', 'css', 'javascript', 'webpack'],
  button: 'See Project',
  source: 'https://github.com/derrick1451/todo-list',
  live: 'https://derrick1451.github.io/todo-list/',
}];

function generateProduct() {
  container.innerHTML = cards.map((product) => `
<div class="work">
<img src='${product.image}' alt="project 1" class="project-image">
<div class ="labels">
<h2 class="project-title">${product.title}</h2>
    <div class="work-flow work-load">
            <h3 class="canopy">${product.canopy}</h3>
            <div class="dot"></div>
            <h4 class="stack">${product.stack}</h4>
            <div class="dot"></div>
            <h4 class="year">${product.year}</h4>
    </div>
    <p class="paragraph">${product.paragraph}</p>
    <ul class="link-btns">
    ${product.technology.map((x) => `<li class="btn">${x}</li>`).join('')}
    </ul>
    <button class="project-button" id='${product.id}'>${product.button}</button>
</div>
</div>
`).join('');
}
generateProduct();
function generateModal() {
  const buttons = document.querySelectorAll('.project-button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = parseFloat(e.target.id);
      const search = cards.find((x) => x.id === id);
      if (search !== undefined) {
        modal.classList.toggle('show-card');
        overlay.classList.toggle('over-lay-pop');
        modal.innerHTML = `
      <div class='d-header'>
      <h2>${search.title}</h2>
      <div id="times">&times</div>
      </div>
      <div class="stack-year">
      <h3 class="canopy">${search.canopy}</h3>
      <div class="dot"></div>
      <h4 class="stack">${search.stack}</h4>
      <div class="dot"></div>
      <h4 class="year">${search.year}</h4>
  </div>
  <div class="pop-up-image">
  <img class='modal-img' src='${search.image}' alt="project 1" >
  </div>
  <div>
  <div class='card-body'>
 <p>${search.paragraph}</p>
 <div class='card-links'>
 <ul class="d-links">
 ${search.technology.map((x) => `<li class="btn">${x}</li>`).join('')}
 </ul>
 <div class='live-button'>
 <button class='btn-flexs'><a href="${search.live}">see live</a> <img class='last-img' src='images/last1.png' alt="project 1>"</button>
 <button class='btn-flexs'> <a href="${search.source}">see source</a> <img class='last-img' src='images/last.png' alt="project 1"> </button>
 </div>
 </div>
 </div>
      </div>`;
      }
    });
  });
}

generateModal();
modal.addEventListener('click', (e) => {
  if (e.target.id !== 'times') return;

  modal.classList.toggle('show-card');
  overlay.classList.toggle('over-lay-pop');
});
const form = document.querySelector('.form-container');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', ((e) => {
  const emailAuth = email.value;
  const lowerCase = emailAuth.toLowerCase();
  if (emailAuth !== lowerCase) {
    errorMessage.textContent = 'the email should be in lowercase';
    errorMessage.style.color = 'red';
    e.preventDefault();
  }
}));
function retrieve(email, message, text) {
  const data = {
    email,
    message,
    text,
  };
  const forms = JSON.stringify(data);
  localStorage.setItem('form-data', forms);
}
const submit = document.querySelector('.submit');
const text = document.querySelector('#text');
const message = document.querySelector('#message');
submit.addEventListener('click', () => {
  retrieve(email.value, message.value, text.value);
});

// retrieve data
const dataRetrieve = localStorage.getItem('form-data');
if (dataRetrieve) {
  const changeUp = JSON.parse(dataRetrieve);
  text.value = changeUp.text;
  email.value = changeUp.email;
  message.value = changeUp.message;
}