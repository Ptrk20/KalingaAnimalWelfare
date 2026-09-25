const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const comparisonSlider = document.querySelector('.comparison input[type="range"]');
const afterImage = document.querySelector('.after-image');
const handle = document.querySelector('.slider-handle');

if (comparisonSlider && afterImage && handle) {
  const updateComparison = () => {
    const value = Number(comparisonSlider.value);
    afterImage.style.width = `${value}%`;
    handle.style.left = `${value}%`;
  };

  comparisonSlider.addEventListener('input', updateComparison);
  updateComparison();
}

const filterButtons = document.querySelectorAll('.filter-btn');
const animalCards = document.querySelectorAll('.animal-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    animalCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.type.includes(filter);
      card.classList.toggle('hidden', !matches);
    });
  });
});

const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target || 0);
  const duration = 1400;
  const start = performance.now();

  const run = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * eased);
    counter.textContent = `${value.toLocaleString()}+`;

    if (progress < 1) {
      requestAnimationFrame(run);
    } else {
      counter.textContent = `${target.toLocaleString()}+`;
    }
  };

  requestAnimationFrame(run);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));
