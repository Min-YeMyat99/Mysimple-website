function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});