$(function () {
  $('.dropdwn > li').hover(
    function () {
      // ホバーした要素の子要素であるドロップダウンメニューを表示する
      $(this).children('.dropdwn_menu').stop().slideDown();
    },
    function () {
      // ホバーが外れた場合はドロップダウンメニューを非表示にする
      $(this).children('.dropdwn_menu').stop().slideUp();
    }
  );
});
