
/*// Fade On Scroll //*/

$(window).scroll(function(){
  $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 60);

  $(".fade-in").css("opacity", 0 + $(window).scrollTop() / 250);
});


/*// Parallax Effect //*/

$(window).scroll(function() {

  $(".move-up").css("transform", "translateY(-" + (0 + $(window).scrollTop() * 0.15) + "%)" );

  $(".move-down").css("transform", "translateY(" + (0 + $(window).scrollTop() * 0.10) + "%)" );
});

/*/// Links ///*/
