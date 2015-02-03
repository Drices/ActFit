function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if (element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
    }
}


$(document).ready(function () {
    var sections = $('.section'),
        nav = $('.nav'),
        nav_height = nav.outerHeight();

    /* Navigation */
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), nav_height);
    });


    // toggle "navbar-no-bg" class
    $('.top-content').waypoint(function () {
        $('.navbar').toggleClass('navbar-no-bg');
    }, {
        offset: function () {
            return -this.element.clientHeight + nav_height
        }
    });
    
    // toggle "active" class
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    /* Background slideshow */
    $.backstretch([
                  "/Content/Images/slide-1.jpg",
                  "/Content/Images/slide-2.jpg",
                  "/Content/Images/slide-3.jpg"
    ], { duration: 3000, fade: 750 });
    // pause slideshow
    $.backstretch('pause');
    // change background when screen scrolls
    $('.section-container').waypoint(function (direction) {
        if (direction === 'down') { $.backstretch('next'); }
        else if (direction === 'up') { $.backstretch('prev'); }
    }, {
        offset: function () {
            return -this.element.clientHeight + $('.navbar').outerHeight()
        }
    });

});


$(window).load(function () {
    /*	Loader */
    //$(".loader-img").fadeOut();
    //$(".loader").delay(1000).fadeOut("slow");

    ///* Modal images */
    //$(".modal-body img").attr("style", "width: 100% !important; height: auto !important;");
});

new WOW().init();

