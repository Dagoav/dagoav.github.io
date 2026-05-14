// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const logoImg = document.getElementById('logo-img');
  const logoText = document.querySelector('.logo-text');


  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    logoText.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    logoText.classList.remove('scrolled');
  }

  if (window.scrollY > 50 && window.scrollY < 710) {
    navLinks.forEach(link => link.classList.add('scrolled-hero'));
  } else {
    navLinks.forEach(link => link.classList.remove('scrolled-hero'));
  }

  if (window.scrollY > 50 && window.scrollY < 710) {
    logoImg.src = '/assets/logo-tips-hero.png';
  } else {
    logoImg.src = '/assets/logo-tips.png';
  }

});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;


    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


const logoImg = document.getElementById('logo-img');
logoImg.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// "Leer más" functionality for service cards
document.addEventListener('DOMContentLoaded', () => {
  const serviceCardsP = document.querySelectorAll('.service-card p');

  // A small timeout ensures fonts are applied before checking scrollHeight
  setTimeout(() => {
    serviceCardsP.forEach(p => {
      // Check if text is truncated (overflowing)
      if (p.scrollHeight > p.clientHeight) {
        const btn = document.createElement('button');
        btn.className = 'leer-mas-btn';
        btn.textContent = 'Leer más';

        p.parentNode.insertBefore(btn, p.nextSibling);

        btn.addEventListener('click', () => {
          p.classList.toggle('expanded');
          btn.textContent = p.classList.contains('expanded') ? 'Leer menos' : 'Leer más';
        });
      }
    });
  }, 100);
});

const contactBtn = document.querySelectorAll('.contact-btn');
contactBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://calendar.app.google/ZH27bWmXKuaP2psF6', '_blank');
  });
});