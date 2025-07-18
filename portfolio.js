// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to top button 
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.opacity = '1';
    backToTop.style.pointerEvents = 'auto';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.pointerEvents = 'none';
  }
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name.length < 2) {
    alert('Please enter at least 2 characters for your name.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (message.length < 10) {
    alert('Message should be at least 10 characters.');
    return;
  }

  alert('Thank you for your message!');
  this.reset();
});

// Dark mode toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Hinge effect on hero h1 when scrolled away
window.addEventListener('scroll', () => {
  const heroH1 = document.querySelector('.hero h1');
  const heroBottom = document.querySelector('.hero').getBoundingClientRect().bottom;

  if (heroBottom < -100 && !heroH1.classList.contains('hinged')) {
    heroH1.classList.add('hinged');
    heroH1.style.animation = 'animate__hinge 2s ease forwards';

    heroH1.addEventListener('animationend', () => {
      // Temporarily hide and reset
      heroH1.style.display = 'none';

      setTimeout(() => {
        heroH1.style.display = 'inline-block';
        heroH1.style.opacity = '1';
        heroH1.style.transform = 'none';
        heroH1.style.animation = 'typing 5s steps(16, end) forwards, blink 0.7s step-start infinite';
        heroH1.classList.remove('hinged');
      }, 500);
    }, { once: true });
  }
});

// 👇 Move this observer code OUTSIDE the scroll event
// const sectionHeadings = document.querySelectorAll("section h2");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const h2 = entry.target;

//       if (!entry.isIntersecting) {
//         h2.classList.add("animate__hinge");

//         h2.addEventListener(
//           "animationend",
//           () => {
//             h2.classList.remove("animate__hinge");
//           },
//           { once: true }
//         );
//       }
//     });
//   },
//   {
//     threshold: 0.3,
//   }
// );

// sectionHeadings.forEach((heading) => observer.observe(heading));
