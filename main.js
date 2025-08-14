import './main.scss'

const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
let isShowMenu = false;

const burgerIcon = `
<svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V3C24 4.10457 23.1046 5 22 5H2C0.89543 5 0 4.10457 0 3V2ZM0 10C0 8.89543 0.895431 8 2 8H22C23.1046 8 24 8.89543 24 10V11C24 12.1046 23.1046 13 22 13H2C0.89543 13 0 12.1046 0 11V10ZM2 16C0.895431 16 0 16.8954 0 18V19C0 20.1046 0.89543 21 2 21H22C23.1046 21 24 20.1046 24 19V18C24 16.8954 23.1046 16 22 16H2Z" fill="black"/>
</svg>
`;

const closeIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41417 0.657655C3.63312 -0.123393 2.36679 -0.123393 1.58574 0.657655L0.878633 1.36476C0.0975847 2.14581 0.0975844 3.41214 0.878633 4.19319L6.51827 9.83282L1.28319 15.0679C0.502137 15.849 0.502137 17.1153 1.28319 17.8963L1.99029 18.6034C2.77134 19.3845 4.03767 19.3845 4.81872 18.6034L10.0538 13.3684L15.0208 18.3353C15.8018 19.1164 17.0681 19.1164 17.8492 18.3353L18.5563 17.6282C19.3374 16.8472 19.3374 15.5808 18.5563 14.7998L13.5893 9.83282L18.9609 4.46131C19.7419 3.68026 19.7419 2.41393 18.9609 1.63288L18.2537 0.925772C17.4727 0.144723 16.2064 0.144723 15.4253 0.925771L10.0538 6.29729L4.41417 0.657655Z" fill="black"/>
</svg>
`

const updateIconMenu = () => {
    burger.innerHTML = isShowMenu ? closeIcon : burgerIcon;
}

function toggleMenu() {
    if (isShowMenu) {
        menu.classList.add('menu--open');
    } else {
        menu.classList.remove('menu--open');
    }
}

burger.addEventListener('click', () => {
    isShowMenu = !isShowMenu;
    updateIconMenu();
    toggleMenu();
});

function hideIncompleteGridRows() {
    const gridContainer = document.querySelector('.cards');
    const gridItems = Array.from(gridContainer.children);
    gridItems.forEach(item => {
        item.style.display = '';
        item.style.visibility = '';
        item.hidden = false;
    });
    const totalItems = gridItems.length;
    const gridComputedStyle = window.getComputedStyle(gridContainer);
    const columnCount = gridComputedStyle
        .getPropertyValue('grid-template-columns')
        .split(' ').length;
    const fullRowCount = Math.floor(totalItems / columnCount);
    const itemsInLastRow = totalItems % columnCount;
    if (itemsInLastRow > 0) {
        const startIndex = fullRowCount * columnCount;
        const lastRowItems = gridItems.slice(startIndex, startIndex + itemsInLastRow);
        lastRowItems.forEach(item => {
        item.style.display = 'none';
        });
    }
}

window.addEventListener('resize', () => {
    hideIncompleteGridRows()
    if (isShowMenu) {
        isShowMenu = false;
        updateIconMenu();
        toggleMenu();
    }
})

hideIncompleteGridRows()