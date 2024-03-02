console.log("Bienvenue sur le site web du Restaurant NomDuRestaurant!");

// Exemple de script JavaScript pour changer la couleur du texte au survol
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('mouseover', () => {
        section.style.color = 'red';
    });

    section.addEventListener('mouseout', () => {
        section.style.color = '#333';
    });
});
