$(document).ready(function () {

    $(".news-carousel").owlCarousel({
        margin: 20,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        rtl: true,
        responsive: {
            0: {
                items: 1.2
            },
            280: {
                items: 1
            },
            400: {
                items: 1.2
            },
            576: {
                items: 2.1
            },
            768: {
                items: 2.75
            },
            992: {
                items: 2.1
            },
            1200: {
                items: 3
            },
            1300: {
                items: 3.1
            },
            1500: {
                items: 3.75
            },
            1600: {
                items: 4
            }
        },
    });

    $(".company-tab-carousel").owlCarousel({
        margin: 0,
        center: true,
        autoHeight: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        rtl: true,
        responsive: {
            0: {
                items: 1.2
            },
            280: {
                items: 1.2
            },
            400: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 2.75
            },
            992: {
                items: 4.2
            },
            1200: {
                items: 5
            }
        },
    });

    $(".owl-item").click(function () {
        const carousel = $('.company-tab-carousel').data('owl.carousel');
        carousel.to(carousel.relative($(this).index()));
    });

});