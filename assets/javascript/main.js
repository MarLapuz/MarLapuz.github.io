//Preloader
$(window).on('load', function () {
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 7000);
});
//End of Preloader

//Scroll to Top
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});
// End of Scroll to Top
