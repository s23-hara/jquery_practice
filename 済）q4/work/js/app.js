$(function () {
  $('.nav-item').click(function () {
    // クリックされたタブのインデックスを取得
    var tabIndex = $(this).index();

    // 全てのコンテンツを非表示にする
    $('.description li').addClass('is-hidden');

    // クリックされたタブに対応するコンテンツを表示する
    $('.description li').eq(tabIndex).removeClass('is-hidden');
  });
});
