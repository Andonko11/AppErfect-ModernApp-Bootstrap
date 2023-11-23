var navbarLink = $('#navbarCollapse li a'),
    carouselOwl = $('#carousel'),
    carouselOwl2 = $('#reviewsSlider'),
    widthScreen = $(window).outerWidth(true),
    openMobMenu = false,
    numberWasAnimated = 0;

function smoothScrollButtons() {
    'use strict';
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 95
                }, 1000);
                return false;
            }
        }
    });
}

function theOwlCarouser() {
    carouselOwl.owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1024: {
                items: 5
            }
        }
    });
    carouselOwl2.owlCarousel({
        loop: true,
        responsiveClass: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
}

function navbarActiveElement() {
    navbarLink.on('click', function () {
        if ($(this).parent().hasClass('active') === false) {
            navbarLink.parent().removeClass('active');
            $(this).parent().addClass('active');
        }
    });
}

function animatedNumbers() {
    'use strict';
    if ($('#counter .downloads').hasClass('fade-in') && numberWasAnimated == 0) {
            $('#counterDownloads').animateNumber({
                number: 50000
            }, 1200);
            numberWasAnimated = 1;
            $(window).scroll();
        }
        if ($('#counter .awards').hasClass('fade-in') && numberWasAnimated == 1) {
            $('#counterAwards').animateNumber({
                number: 47396
            }, 1200);
            numberWasAnimated = 2;
        }
        if ($('#counter .users').hasClass('fade-in') && numberWasAnimated == 2) {
            $('#counterUsers').animateNumber({
                number: 46
            }, 1200);
            numberWasAnimated = 3;
        }
        if ($('#counter .news').hasClass('fade-in') && numberWasAnimated == 3) {
            $('#counterNews').animateNumber({
                number: 37
            }, 1200);
            numberWasAnimated = 4;
        }
    $(window).scroll(function (e) {
        if ($('#counter .downloads').hasClass('fade-in') && numberWasAnimated == 0) {
            $('#counterDownloads').animateNumber({
                number: 50000
            }, 1200);
            numberWasAnimated = 1;
            $(window).scroll();
        }
        if ($('#counter .awards').hasClass('fade-in') && numberWasAnimated == 1) {
            $('#counterAwards').animateNumber({
                number: 47396
            }, 1200);
            numberWasAnimated = 2;
        }
        if ($('#counter .users').hasClass('fade-in') && numberWasAnimated == 2) {
            $('#counterUsers').animateNumber({
                number: 46
            }, 1200);
            numberWasAnimated = 3;
        }
        if ($('#counter .news').hasClass('fade-in') && numberWasAnimated == 3) {
            $('#counterNews').animateNumber({
                number: 37
            }, 1200);
            numberWasAnimated = 4;
        }
    });
}

function slideMenuLeft() {
    $('[data-toggle="slide-collapse"]').on('click', function () {
        $navMenuCont = $($(this).data('target'));
        openMobMenu = false;
        $navMenuCont.animate({
            'width': 'toggle'
        }, 350, function () {
            openMobMenu = true;
        });
    });
}

function closeMenu() {
    navbarLink.click(function () {
        if (openMobMenu === true && $(window).width() < 768) {
            $('#hamburger').trigger('click');
        }
    });

}



function scrollMagicCode() {
    var controller = new ScrollMagic.Controller();
    $('#features div').each(function () {
        var ourScene = new ScrollMagic.Scene({
                triggerElement: this.children[0],
                triggerHook: 0.7,
                reverse: false
            })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);
    });
    $('.fadeInContainer').each(function () {
        var ourScene = new ScrollMagic.Scene({
                triggerElement: this.children[0],
                triggerHook: 0.7,
                reverse: false
            })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);
    });
    $('#counter .col-sm-3').each(function () {
        var ourScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.7,
                reverse: false
            })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);
    });
}




$(document).ready(function () {
    smoothScrollButtons();
    theOwlCarouser();
    navbarActiveElement();
    slideMenuLeft();
    closeMenu();
    animatedNumbers()
    $(window).on('resize', function () {
        widthScreen = $(window).outerWidth(true);
        if (widthScreen >= 768) {
            openMobMenu = false;
        }

    });
    scrollMagicCode();
    $('.launch-modal').on('click', function (e) {
        e.preventDefault();
        $('#' + $(this).data('modal-id')).modal();
    });
});
