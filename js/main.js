const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const allNavItem = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');
const body = document.querySelector('body');

const navActive = () => {
    nav.classList.toggle('nav--active')


    allNavItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
            bodyHidden()
        })
    })
    handlNavItemAnimation();
    navBtnBars.classList.remove('black-bars-colors')
    bodyHidden();
}

const handlNavItemAnimation = () => {
    let delayTime = 0;
    allNavItem.forEach(item => {
        item.classList.toggle('nav-item-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })

}


const bodyHidden = () => {
    if (nav.classList.contains('nav--active')) {
        body.style.overflow = 'hidden'
        navBtnBars.classList.remove('black-bars-color')
    } else if (!nav.classList.contains('nav--active')) {
        body.style.overflow = 'auto'
    }
}

const currentYear = () => {

    const today = new Date();
    footerYear.textContent = today.getFullYear();

}

const burgerBtnColChanger = () => {
    const currentSection = window.scrollY;
    allSections.forEach(element => {
        if (element.classList.contains('white-section') && element.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-colors')
        } else if (!element.classList.contains('white-section') && element.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-colors')
        }
    });
}


currentYear();
burgerBtn.addEventListener('click', navActive);
window.addEventListener('scroll', burgerBtnColChanger);
// burgerBtn.addEventListener('click', bodyHidden);