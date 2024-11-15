  // Sélectionne tous les éléments <h3> qui sont des titres de section
  const sectionTitles = document.querySelectorAll('.container-gauche h3');

  // Ajoute un événement de clic à chaque titre
  sectionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const subList = title.nextElementSibling; // Récupère le <ul> suivant le <h3>

      if (subList && subList.classList.contains('submenu')) {
        // Alterne l'affichage de la sous-liste
        subList.style.display = (subList.style.display === 'none' || subList.style.display === '') ? 'block' : 'none';

        // Alterne la classe pour ajouter un effet visuel (facultatif)
        title.classList.toggle('open');
      }
    });
  });