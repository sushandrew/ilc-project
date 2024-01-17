$(function() {
    const nav = $('.nav');
    const navInner = $('.nav__inner');
    const navList = $('.nav__list');
    const navText = $('.nav__text');
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();

        if (scrolled > 50) {
            nav.addClass('nav--small');
            navInner.addClass('nav__inner--small');
            navList.addClass('nav__list--small');
            navText.addClass('nav__text--small');
        } else {
            nav.removeClass('nav--small');
            navInner.removeClass('nav__inner--small');
            navList.removeClass('nav__list--small');
            navText.removeClass('nav__text--small');
        }

        scrollPrev = scrolled;
    })

    const hamburger = $('.hamburger');
    const navMenuMobile = $('.nav__menu-mobile');
    hamburger.click(function() {
        navMenuMobile.toggleClass('nav__menu-mobile--active')
    })
})

const feeSelectors = document.querySelectorAll('.fee__selectors-item');
const feeList = document.querySelectorAll('.fee__inner');
for (let i = 0; i < feeSelectors.length; i++) {
    feeSelectors[i].addEventListener('click', function() {
        feeSelectors.forEach(function(feeSelector) {
            feeSelector.classList.remove('fee__selectors-item--selected');
        })
        feeList.forEach(function(feeItem) {
            feeItem.classList.remove('fee__inner--selected');
        })
        feeSelectors[i].classList.add('fee__selectors-item--selected');
        feeList[i].classList.add('fee__inner--selected');
    })
}