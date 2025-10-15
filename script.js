// Animation fluide quand les éléments apparaissent
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// Message de bienvenue animé
window.addEventListener('load', () => {
  console.log("Bienvenue sur Techify 🚀 - Créé avec passion !");
});

// Boutons "Acheter maintenant"
const buttons = document.querySelectorAll('.product button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("🚀 Merci de votre intérêt ! La boutique sera bientôt disponible.");
  });
});
