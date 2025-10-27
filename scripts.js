// Animate service cards on scroll
const cards = document.querySelectorAll('.service-card');

function showCards() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-links');

if(hamburger){
  hamburger.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
  });
}
