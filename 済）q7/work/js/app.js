$(function() {
  $(".btn__submit").click(function() {
    // 名字の入力値を取得
    var familyName = $("#family__name").val();
    console.log("名字: " + familyName);

    // 名前の入力値を取得
    var givenName = $("#given__name").val();
    console.log("名前: " + givenName);

    // 生年月日の選択値を取得
    var year = $(".year").val();
    var month = $(".month").val();
    var day = $(".day").val();
    var birthday = year + "年" + month + "月" + day + "日";
    console.log("生年月日: " + birthday);

    // 性別の選択値を取得
    var gender = $("input[name='gender']:checked").val();
    console.log("性別: " + gender);

    // 職業の選択値を取得
    var occupation = $(".occupation").val();
    console.log("職業: " + occupation);

    // アカウント名の入力値を取得
    var accountName = $("#account__name").val();
    console.log("アカウント名: " + accountName);

    // メールアドレスの入力値を取得
    var email = $("#email").val();
    console.log("メールアドレス: " + email);

    // パスワードの入力値を取得
    var password = $("#password").val();
    console.log("パスワード: " + password);

    // 住所の入力値を取得
    var address = $("#address").val();
    console.log("住所: " + address);

    // 電話番号の入力値を取得
    var tel = $("#tel").val();
    console.log("電話番号: " + tel);

    // チェックボックスの選択値を取得
    var subscriptions = [];
    $(".subscription__checkbox:checked").each(function() {
      subscriptions.push($(this).val());
    });
    console.log("購読情報: " + subscriptions.join(", "));

    // フォームの送信をキャンセル
    return false;
  });
});
