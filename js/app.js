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
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
  if ( gameShow ) {
    gameShow.classList.remove('col-lg-8');
    gameShow.classList.add('d-lg-none');
    employeeDir.classList.remove('d-lg-none');
    employeeDir.classList.add('col-lg-8');
  }
  
  else if ( gallery ) {
    gallery.classList.remove('col-lg-8');
    gallery.classList.add('d-lg-none');
    gameShow.classList.remove('d-lg-none');
    gameShow.classList.add('col-lg-8');
  } 
  
  else if ( webDash ) {
    webDash.classList.remove('col-lg-8');
    webDash.classList.add('d-lg-none');
    gallery.classList.remove('d-lg-none');
    gallery.classList.add('col-lg-8');
  }
  
  else if ( employeeDir ) {
    employeeDir.classList.remove('col-lg-8');
    employeeDir.classList.add('d-lg-none');
    webDash.classList.remove('d-lg-none');
    webDash.classList.add('col-lg-8');
  }
});

next.addEventListener('click', () => {
  if ( gameShow ) {
    gameShow.classList.remove('col-lg-8');
    gameShow.classList.add('d-lg-none');
    gallery.classList.remove('d-lg-none');
    gallery.classList.add('col-lg-8');
  } 
  
  else if ( gallery ) {
    gallery.classList.remove('col-lg-8');
    gallery.classList.add('d-lg-none');
    webDash.classList.remove('d-lg-none');
    webDash.classList.add('col-lg-8');
  } 
  
  else if ( webDash ) {
    webDash.classList.remove('col-lg-8');
    webDash.classList.add('d-lg-none');
    employeeDir.classList.remove('d-lg-none');
    employeeDir.classList.add('col-lg-8');
  } 
  
  else if ( employeeDir ) {
    employeeDir.classList.remove('col-lg-8');
    employeeDir.classList.add('d-lg-none');
    gameShow.classList.remove('d-lg-none');
    gameShow.classList.add('col-lg-8');
  }
});