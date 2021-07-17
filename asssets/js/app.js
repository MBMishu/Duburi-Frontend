// made by mb_mishu
!(function($) {
    "use strict";
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // wow initiate
    var wow = new WOW({
        animateClass: "animated",
        offset: 50,
    });
    wow.init();

    // Initiate venobox (lightbox feature used in portofilo)
    $(".venobox").venobox({
        spinner: "cube-grid",
        share: false,
    });

    // owl carousel
    if ($(".sponsor-list").length) {
        $(".sponsor-list").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 3,
            margin: 30,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 3,
                    margin: 0,
                },
                460: {
                    items: 3,
                    margin: 0,
                },
                576: {
                    items: 3,
                    margin: 20,
                },
                992: {
                    items: 3,
                    margin: 30,
                },
            },
        });
    }
})(jQuery);