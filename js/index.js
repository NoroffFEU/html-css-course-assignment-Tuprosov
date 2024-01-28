import { updateCartIconDisplay } from "./cartIconDisplay.mjs";
import './burger.js';
import './slider.js';

// change header logo to dark while hovering
function changeTheme() {
    const logo = document.getElementById('logo');
    logo.src = '../assets/images/logo-dark.png';
    logo.alt = 'Rainydays logo dark';
}

// reset to default logo
function resetTheme() {
    const logo = document.getElementById('logo');
    logo.src = '../assets/images/logo-light.png';
    logo.alt = 'Rainydays logo light';
}

function swtichHeaderLogo (header) {
    header.addEventListener('mouseover', changeTheme)
    header.addEventListener('mouseout' ,resetTheme)
}

const header = document.querySelector('.header');

swtichHeaderLogo(header);
updateCartIconDisplay();