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
    gameShow.classList.replace('col-lg-8', 'd-lg-none');
    employeeDir.classList.replace('d-lg-none', 'col-lg-8');
  }
  
  else if ( gallery ) {
    gallery.classList.replace('col-lg-8', 'd-lg-none');
    gameShow.classList.replace('d-lg-none', 'col-lg-8');
  } 
  
  else if ( webDash ) {
    webDash.classList.replace('col-lg-8', 'd-lg-none');
    gallery.classList.replace('d-lg-none', 'col-lg-8');
  }
  
  else if ( employeeDir ) {
    employeeDir.classList.replace('col-lg-8', 'd-lg-none');
    webDash.classList.replace('d-lg-none', 'col-lg-8');
  }
});

next.addEventListener('click', () => {
  if ( gameShow ) {
    gameShow.classList.replace('col-lg-8', 'd-lg-none');
    gallery.classList.replace('d-lg-none', 'col-lg-8');
  } 
  
  else if ( gallery ) {
    gallery.classList.replace('col-lg-8', 'd-lg-none');
    webDash.classList.replace('d-lg-none', 'col-lg-8');
  } 
  
  else if ( webDash ) {
    webDash.classList.replace('col-lg-8', 'd-lg-none');
    employeeDir.classList.replace('d-lg-none', 'col-lg-8');
  } 
  
  else if ( employeeDir ) {
    employeeDir.classList.replace('col-lg-8', 'd-lg-none');
    gameShow.classList.replace('d-lg-none', 'col-lg-8');
  }
});
