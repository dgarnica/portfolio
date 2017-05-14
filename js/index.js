
/*// Fade On Scroll //*/

$(window).scroll(function(){
  $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 100);

  $(".fade-in").css("opacity", 0 + $(window).scrollTop() / 250);
});


/*// Parallax Effect //*/

$(window).scroll(function() {

  $(".move-up").css("transform", "translateY(-" + (0 + $(window).scrollTop() * 0.15) + "%)" );

  $(".move-down").css("transform", "translateY(" + (0 + $(window).scrollTop() * 0.10) + "%)" );
});

/*/// Links ///*/

$(document).ready(function(){
  $("#about-link").click(function() {
    $('html, body').animate({
      scrollTop: '450px'});
    });

  $("#works-link").click(function() {
    $('html, body').animate({
      scrollTop: '800px'});
    });

  $("#back-to-top").click(function() {
    $('html, body').animate({
      scrollTop: '-150em'});
    });
  });
