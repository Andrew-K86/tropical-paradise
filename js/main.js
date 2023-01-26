const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const allNavItem = document.querySelectorAll('.nav__item');

const navActive = () => {
    nav.classList.toggle('nav--active')

    allNavItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })
    handlNavItemAnimation();
}

const handlNavItemAnimation = () => {
    let delayTime = 0;
    allNavItem.forEach(item => {
        item.classList.toggle('nav-item-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime ++;
    })

}



burgerBtn.addEventListener('click', navActive);