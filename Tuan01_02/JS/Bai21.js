const root = getComputedStyle(document.documentElement);
const bodyLeft = document.querySelector('.body-left');

const heightCategory = +root.getPropertyValue('--height-menu').split('px')[0];
const heightNavbar = +root.getPropertyValue('--height-navbar').split('px')[0];

window.onscroll = () => {
    const height = window.scrollY || document.documentElement.scrollTop;

    bodyLeft.style.height = 
        `calc(100vh - ${heightNavbar}px - ${height > heightCategory 
            ? 0 : heightCategory}px)`;
    }