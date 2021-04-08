$(document).ready(function () {
    var sliderNav = $('.reviews__review--nav');
    if (sliderNav.width() <= 182) {
        maxItems = 3;
    }
    else {
        maxItems = 7;
    }


    $('.reviews__review--content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.reviews__review--nav'
    });
    $('.reviews__review--nav').slick({

        slidesToShow: maxItems,
        slidesToScroll: 1,
        asNavFor: '.reviews__review--content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
        draggable: false
    });
});

$('.reviews__review--nav').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.reviews__user-text').show();
    $('.reviews__link-more').show();
    $('.reviews__user-text--hidden').hide();
});

$(document).on('click', '.reviews__review--nav', function (event) {
    if (event.offsetX > 0) {
        $('.reviews__review--nav').slick('slickNext');
    }
    else {
        $('.reviews__review--nav').slick('slickPrev');
    }
});

$(document).on('click', '.reviews__review--element', function (event) {
    $('.reviews__user-text').show();
    $('.reviews__link-more').show();
    $('.reviews__user-text--hidden').hide();
});

$(document).on('click', '.reviews__link-more', function (event) {
    $('.reviews__user-text--hidden').show();
    $('.reviews__user-text').hide();
    $('.reviews__link-more').hide();
});

$(".btn__hero").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
});

$(".navigation-list__link").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
});

$(".mobile-list__link").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
});
