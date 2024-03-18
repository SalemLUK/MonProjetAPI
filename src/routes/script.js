function onResize() {
    const nutrimentElement = document.getElementById('nutrimentSearch');
    if (nutrimentElement) {
        nutrimentElement.classList.add('ma-classe'); // Ajoute 'ma-classe' à l'élément
    } else {
        console.log('Nutriment element not found');
    }
}

// Utilisez DOMContentLoaded pour s'assurer que le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Appel de la fonction onResize après le chargement du DOM
    onResize();
});
