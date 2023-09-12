window.onload = function() {
    const HEADER_BAR = document.querySelector('.header-bar');

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if (window.scrollY >= 150) {
            HEADER_BAR.style.backgroundColor = 'rgba(0, 114, 178, 1)';
            HEADER_BAR.style.transition = '.5s ease-in-out';
        } else {
            HEADER_BAR.style.backgroundColor = 'rgba(0, 114, 178, 0)';
        }
    }
}