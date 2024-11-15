function toggleAccount() {
    const accountContainer = document.getElementById('accountContainer');
    if (accountContainer.style.display === 'none' || accountContainer.style.display === '') {
        accountContainer.style.display = 'block'; // Affiche le panier
    } else {
        accountContainer.style.display = 'none'; // Masque le panier
    }
}