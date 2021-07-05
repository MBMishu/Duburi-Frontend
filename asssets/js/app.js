// made by mb_mishu
!(function($) {
    "use strict";
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // wow initiate
    var wow = new WOW({
        animateClass: 'animated',
        offset: 50
    });
    wow.init();

    // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox({
        spinner: 'cube-grid',
        'share': false
    });

    // owl carousel
    if ($('.resume-list').length) {
        $('.resume-list').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 3,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 30
                }
            }
        });
    }
    if ($('.skill-list').length) {
        $('.skill-list').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 3,
            margin: 30,
            autoplay: true,
            smartSpeed: 100,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 4,
                    margin: 10
                },
                460: {
                    items: 4,
                    margin: 10
                },
                576: {
                    items: 6,
                    margin: 20
                },
                992: {
                    items: 6,
                    margin: 30
                }
            }
        });
    }
    if ($('.project-list').length) {
        $('.project-list').owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            items: 3,
            margin: 30,
            autoplay: true,
            smartSpeed: 100,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    margin: 0
                },
                992: {
                    items: 4,
                    margin: 0
                }
            }
        });
    }


})(jQuery);