$(document).ready(function() {
    $(".slider-content").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        adaptiveHeight: true,
        arrows: false,
        centerMode: true,
        centerPadding: 60,
        mobileFirst: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 695,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
        ],
    });
});