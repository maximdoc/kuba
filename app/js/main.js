$(function () {
    $('.photo_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        infinite: false,
        fade: true,
        prevArrow: '<button class="slider-btn slider-btn_left"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z" fill="#FAFAFA"/>\n' +
            '</svg></button>',
        nextArrow: '<button class="slider-btn slider-btn_right"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7H12.2L6.6 1.4L8 0L16 8L8 16L6.6 14.6L12.2 9H0V7Z" fill="#FAFAFA"/>\n' +
            '</svg></button>',
    });

    $('.menu_btn').on('click', function () {
        $('.menu_list').slideToggle();
    });

});