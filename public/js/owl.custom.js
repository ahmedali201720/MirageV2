$(document).ready(function () {

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

    $(".agenda-tab-carousel").owlCarousel({
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
                items: 0.85
            },
            280: {
                items: 1.5
            },
            400: {
                items: 2
            },
            576: {
                items: 3
            }
        }
    });

    $(".owl-item").click(function () {
        moveCenterElement('company-tab-carousel');
    });

    $(".owl-item").click(function () {
        moveCenterElement('agenda-tab-carousel');
    });

    function moveCenterElement(selector) {
        const carousel = $(selector).data('owl.carousel');
        if (carousel)
            carousel.to(carousel.relative($(this).index()));
    }

});