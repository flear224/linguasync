$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('.menu').slideToggle();
  });
  
  $(window).resize(function() {
    if ($(window).width() > 768 ) {
      $('.menu').removeAttr('style');
    }
  });
