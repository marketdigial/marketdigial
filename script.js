const faders = document.querySelectorAll('.fade-in, .slide-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
const trueFocusContainer = document.querySelector('.truefocus-container');
const words = document.querySelectorAll('.truefocus-word');
let index = 0;

function cycleWords() {
  if (!trueFocusContainer.classList.contains('visible')) {
    // Espera hasta que la animación de scroll termine (se agregue la clase visible)
    setTimeout(cycleWords, 200);
    return;
  }

  words.forEach(word => word.classList.remove('active'));
  words[index].classList.add('active');
  index = (index + 1) % words.length;

  setTimeout(cycleWords, 2000);
}

// Inicia el ciclo
cycleWords();
