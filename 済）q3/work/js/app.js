$(function () {
  $(".drawer_button").click(function () {
    $(this).toggleClass("active");
    $(".drawer_bg").fadeToggle();
    $(".drawer_nav_wrapper").toggleClass("open");
  });

  $(".drawer_close").click(function () {
    $(this).hide();
    $(".drawer_button").removeClass("active");
    $(".drawer_nav_wrapper").removeClass("open");
  });
});
