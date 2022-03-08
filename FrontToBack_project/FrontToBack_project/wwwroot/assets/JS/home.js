    /* BEST SELLER START */
    // (function($) {
    //     "use strict";
    //     // Auto-scroll
    //     $('#myCarousel').carousel({
    //         interval: 5000
    //     });

    //     // Control buttons
    //     $('.next').click(function() {
    //         $('.carousel').carousel('next');
    //         return false;
    //     });
    //     $('.prev').click(function() {
    //         $('.carousel').carousel('prev');
    //         return false;
    //     });

    //     // On carousel scroll
    //     $("#myCarousel").on("slide.bs.carousel", function(e) {
    //         var $e = $(e.relatedTarget);
    //         var idx = $e.index();
    //         var itemsPerSlide = 3;
    //         var totalItems = $(".carousel-item").length;
    //         if (idx >= totalItems - (itemsPerSlide - 1)) {
    //             var it = itemsPerSlide -
    //                 (totalItems - idx);
    //             for (var i = 0; i < it; i++) {
    //                 // append slides to end 
    //                 if (e.direction == "left") {
    //                     $(
    //                         ".carousel-item").eq(i).appendTo(".carousel-inner");
    //                 } else {
    //                     $(".carousel-item").eq(0).appendTo(".carousel-inner");
    //                 }
    //             }
    //         }
    //     });
    // })
    // (jQuery);
    /* BEST SELLER ENDs */



    // $(function() {
    //     $('.fisrt-carousel').owlCarousel({
    //         loop: true,
    //         margin: 10,
    //         nav: true,
    //         reponsive: {
    //             0: {
    //                 items: 1
    //             },
    //             600: {
    //                 items: 1
    //             },
    //             1000: {
    //                 items: 1
    //             }
    //         }
    //     })
    //     $('.second-carousel').owlCarousel({
    //         loop: true,
    //         margin: 10,
    //         nav: true,
    //         reponsive: {
    //             0: {
    //                 items: 1
    //             },
    //             600: {
    //                 items: 2
    //             },
    //             1200: {
    //                 items: 3
    //             }
    //         }
    //     })
    // })