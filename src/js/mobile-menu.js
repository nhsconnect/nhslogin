document.querySelector('#close-menu').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.className = mobileMenu.className.replace('mobile-menu--open', '');
});

document.querySelector('#toggle-menu').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const isOpen = mobileMenu.className.includes('mobile-menu--open');

    if (isOpen) {
        mobileMenu.className = mobileMenu.className.replace('mobile-menu--open', '');
    } else {
        mobileMenu.className = mobileMenu.className + ' mobile-menu--open';
    }
})