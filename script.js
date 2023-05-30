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
  canopy: 'CANOPY',
  stack: 'Back End Dev',
  year: '2015',
  technology: ['html', 'css', 'javascript'],
  button: 'See Project',
},
{
  id: 2,
  image: 'images/desktop2.png',
  title: 'Multi-Post Stories',
  paragraph: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  canopy: 'FACEBOOK',
  stack: 'Full Stack Dev',
  year: '2015',
  technology: ['html', 'css', 'javascript'],
  button: 'See Project',
},
{
  id: 3,
  image: 'images/desktop3.png',
  title: 'Facebook 360',
  paragraph: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  canopy: 'FACEBOOK',
  stack: 'Full Stack Dev',
  year: '2015',
  technology: ['html', 'css', 'javascript'],
  button: 'See Project',
},
{
  id: 4,
  image: 'images/destop4.png',
  title: 'Uber Navigation',
  paragraph: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  canopy: 'Uber',
  stack: 'Lead Developer',
  year: '2015',
  technology: ['html', 'css', 'javascript'],
  button: 'See Project',
}];

function generateProduct() {
  container.innerHTML = cards.map((product) => `
<div class="work">
<img src='${product.image}' alt="project 1" class="project-image">
<div>
    <div class="project-details">
        <h2 class="project-title">${product.title}</h2>
        <div class="stack-year">
            <h3 class="canopy">${product.canopy}</h3>
            <div class="dot"></div>
            <h4 class="stack">${product.stack}</h4>
            <div class="dot"></div>
            <h4 class="year">${product.year}</h4>
        </div>
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
 <button class='btn-flexs'>see live <img class='last-img' src='images/last1.png' alt="project 1>"</button>
 <button class='btn-flexs'>see source <img class='last-img' src='images/last.png' alt="project 1"> </button>
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

const text = document.querySelector('#text');
const message = document.querySelector('#message');

const data = {
  text: '',
  email: '',
  message: '',
};
const formItems = document.querySelectorAll('.form-container');
const formData = Array.from(formItems);
formData.forEach((form) => {
  form.addEventListener('input', (e) => {
    const letter = e.target.id;
    data[letter] = e.target.value;
    const dataMarker = JSON.stringify(data);
    localStorage.setItem('data', dataMarker);
  });
});
// retrieve data
const dataRetrieve = localStorage.getItem('data');
if (!dataRetrieve) {
  const changeUp = JSON.parse(dataRetrieve);
  text.value = changeUp.text;
  email.value = changeUp.email;
  message.value = changeUp.message;
}