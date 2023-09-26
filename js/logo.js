document.addEventListener('DOMContentLoaded', () => {
    const hostname = location.hostname;
    const website = hostname.split('.')[0];

    const logoText = document.querySelectorAll('.logo-text');
    const mailText = document.querySelectorAll('.mail-text');
    const otherText = document.querySelectorAll('.other-text');

    logoText.forEach((logo) => {
        logo.innerText = website;
        logo.setAttribute('style', 'font-weight: 600; text-transform: uppercase;');
    });
    mailText.forEach((logo) => {
        logo.innerText = website;
    });
    otherText.forEach((logo) => {
        logo.innerText = website;
    })



});