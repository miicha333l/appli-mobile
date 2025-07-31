// Menu burger (exemple d'ouverture/fermeture)
document.querySelector('.menu-btn').addEventListener('click', function() {
    alert('Menu ouvert ! (à personnaliser)');
});

// Validation du formulaire de recherche
document.getElementById('search-form').addEventListener('submit', function(e) {
    var search = document.getElementById('search-text').value.trim();
    if (!search) {
        e.preventDefault();
        alert('Veuillez entrer une idée à rechercher.');
    }
});