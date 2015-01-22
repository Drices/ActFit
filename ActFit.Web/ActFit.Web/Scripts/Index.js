
function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if (element_class != '.top-content') {
        element_class += '-container';
        //scroll_to = $(element_class).offset().top - nav_height;
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
    }
}


jQuery(document).ready(function () {

    /* Navigation */
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), $('.navbar').outerHeight());
    });
    // toggle "navbar-no-bg" class
    $('.top-content').waypoint(function () {
        $('.navbar').toggleClass('navbar-no-bg');
    }, {
        offset: function () {
            return -this.element.clientHeight + $('.navbar').outerHeight()
        }
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
        offset: function() {
            return -this.element.clientHeight + $('.navbar').outerHeight()
    }
    });

});


jQuery(window).load(function () {
    /*	Loader */
    //$(".loader-img").fadeOut();
    //$(".loader").delay(1000).fadeOut("slow");

    ///* Modal images */
    //$(".modal-body img").attr("style", "width: 100% !important; height: auto !important;");
});

 new WOW().init();

