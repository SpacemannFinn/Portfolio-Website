var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-container').outerHeight();
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function (event) {
    didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function () {
    if (didScroll) {
        hasScrolled();;
        $('#popup-list').addClass('is-active');
        didScroll = false;
    }
}, 250);

function hasScrolled() {

    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.navbar-container').removeClass('show').addClass('hide');
    } else if (st + $(window).height() - 10 < $(document).height()) {

        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        $('.navbar-container').removeClass('hide').addClass('show');
    }



    lastScrollTop = st;
    console.log(lastScrollTop)
    console.log("document height " + $(document).height())
    console.log("st + window height " + (st + $(window).height()))

}
