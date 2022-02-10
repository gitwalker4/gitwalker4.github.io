const projButton = document.querySelector('.projButton');
const projects = document.querySelector('#projects');

projButton.addEventListener('click', () => {
  projects.scrollIntoView({
    behavior: 'smooth'
  });
});


const gameShow = document.querySelector('.gameShow');
const gallery = document.querySelector('.gallery');
const webDash = document.querySelector('.webDash');
const employeeDir = document.querySelector('.empDir');
const dot1 = document.querySelector('.dot-1');
const dot2 = document.querySelector('.dot-2');
const dot3 = document.querySelector('.dot-3');
const dot4 = document.querySelector('.dot-4');

dot1.addEventListener('click', () => {
  dot1.classList.add('active');
  dot2.classList.remove('active');
  dot3.classList.remove('active');
  dot4.classList.remove('active');
  gallery.classList.replace('col-lg-8', 'd-lg-none');
  webDash.classList.replace('col-lg-8', 'd-lg-none');
  employeeDir.classList.replace('col-lg-8', 'd-lg-none');
  gameShow.classList.replace('d-lg-none', 'col-lg-8');
});

dot2.addEventListener('click', () => {
  dot2.classList.add('active');
  dot1.classList.remove('active');
  dot3.classList.remove('active');
  dot4.classList.remove('active');
  gameShow.classList.replace('col-lg-8', 'd-lg-none');
  webDash.classList.replace('col-lg-8', 'd-lg-none');
  employeeDir.classList.replace('col-lg-8', 'd-lg-none');
  gallery.classList.replace('d-lg-none', 'col-lg-8');
});

dot3.addEventListener('click', () => {
  dot3.classList.add('active');
  dot1.classList.remove('active');
  dot2.classList.remove('active');
  dot4.classList.remove('active');
  gameShow.classList.replace('col-lg-8', 'd-lg-none');
  gallery.classList.replace('col-lg-8', 'd-lg-none');
  employeeDir.classList.replace('col-lg-8', 'd-lg-none');
  webDash.classList.replace('d-lg-none', 'col-lg-8');
});

dot4.addEventListener('click', () => {
  dot4.classList.add('active');
  dot1.classList.remove('active');
  dot2.classList.remove('active');
  dot3.classList.remove('active');
  gameShow.classList.replace('col-lg-8', 'd-lg-none');
  gallery.classList.replace('col-lg-8', 'd-lg-none');
  webDash.classList.replace('col-lg-8', 'd-lg-none');
  employeeDir.classList.replace('d-lg-none', 'col-lg-8');
});

const drapes = document.querySelector('.drapes');