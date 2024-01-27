const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 
  
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active'); // Adding 'active' class to the current page link
        }
    });
});

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  }