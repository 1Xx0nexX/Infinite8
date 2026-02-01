const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      const card = entry.target.querySelector('.card');
      if(card) card.classList.add('show');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
