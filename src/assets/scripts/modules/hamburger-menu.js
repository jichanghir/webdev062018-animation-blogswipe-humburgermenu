{
    const WIN = window;
    const DOC = document;

    const hamToggle = DOC.querySelector('#ham-toggle');
    const hamburgerMenuBg = DOC.querySelector('#hamburger-menu-bg');
    const hamburgerMenu = DOC.querySelector('#hamburger-menu');

    hamToggle.addEventListener('click', () => {
        hamToggle.classList.toggle('on');
        hamburgerMenuBg.classList.toggle('on');
        hamburgerMenuBg.classList.toggle('off');
        hamburgerMenu.classList.toggle('on');
    });
}
