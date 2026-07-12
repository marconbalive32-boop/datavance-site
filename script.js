const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    cards.forEach((card) => {
      card.classList.toggle('hidden', category !== 'todos' && card.dataset.category !== category);
    });
  });
});

const checkoutUrl = 'https://go.hotmart.com/A106697672V';

const toast = document.querySelector('.toast');
document.querySelectorAll('[data-checkout]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (checkoutUrl.startsWith('http')) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 4200);
  });
});

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
