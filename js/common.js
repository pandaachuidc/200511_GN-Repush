// on screen animation

$(window).scroll(function() {
  $(".animate").each(function() {
    if ($(this).isOnScreen(0, 0.1) == true) {
      $(this).addClass("on");
    } else {
      $(this).removeClass("on");
    }
  });
});


