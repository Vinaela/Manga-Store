$(function () {

    // Function that allows to activate the navbar when scrolling down. 
    // Indeed, the navbar is hidden on the home page when you arrive on the site for the first time
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

    // Function that allows to go to a section after the "discover" button is clicked
    // This makes it possible to make a transition 
    $('a.js-scroll[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - $("#nav").height()
                }, 1000);
                return false;
            }
        }
    });

});