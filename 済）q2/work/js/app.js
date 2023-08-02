$(function() {
  // モーダルウィンドウを開くボタンがクリックされた時
  $(".modal_open_button").on("click", function() {
    $(".modal_win").fadeIn();
  });

  // モーダルウィンドウを閉じるボタンがクリックされた時
  $(".modal_close_button").on("click", function() {
    $(".modal_win").fadeOut();
  });
});
