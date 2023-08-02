$(function() {
  $(".select-box").change(function() {
    var selectedCategory = $(this).val(); // 選択されたカテゴリーを取得

    $(".food-list > li").each(function() {
      var categoryType = $(this).data("category-type"); // データ属性からカテゴリーを取得

      if (selectedCategory === "all" || selectedCategory === categoryType) {
        $(this).show(); // 選択されたカテゴリーに一致する項目を表示
      } else {
        $(this).hide(); // 選択されたカテゴリーに一致しない項目を非表示
      }
    });
  });
});
