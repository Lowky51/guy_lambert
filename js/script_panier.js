function toggleCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block'; // Affiche le panier
    } else {
        cartContainer.style.display = 'none'; // Masque le panier
    }
}