$(function() {
  var pageCount = 1; // 初期のページ番号
  var searchWord = ""; // 初期の検索ワード

  // 検索ボタンのクリックイベント
  $(".search-btn").on("click", function() {
    searchWord = $("#search-input").val(); // 入力された検索ワードを取得
    pageCount = 1; // ページ番号を初期化
    performSearch(); // 検索を実行
  });

  // リセットボタンのクリックイベント
  $(".reset-btn").on("click", function() {
    $("#search-input").val(""); // 検索ワードの入力フィールドをクリア
    $(".lists").empty(); // 検索結果リストを空にする
    $(".message").remove(); // メッセージを削除
    searchWord = ""; // 検索ワードを初期化
    pageCount = 1; // ページ番号を初期化
  });

  // 検索を実行する関数
  function performSearch() {
    var apiUrl = `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`;

    $.ajax({
      url: apiUrl,
      method: "GET"
    }).done(function(response) {
      var result = response["@graph"];
      displayResult(result); // 検索結果を表示する関数を呼び出す
    }).fail(function(err) {
      displayError(err); // エラーメッセージを表示する関数を呼び出す
    });
  }

  // 検索結果を表示する関数
  function displayResult(result) {
    $(".message").remove(); // メッセージを削除
    $(".lists").empty(); // 検索結果リストを空にする

    if (result && result.length > 0) {
      $.each(result[0].items, function(index, item) {
        var listItem = `<li class="lists-item">
          <div class="list-inner">
            <p>タイトル：${item.title ? item.title : "タイトル不明"}</p>
            <p>著者：${item["dc:creator"] ? item["dc:creator"] : "著者不明"}</p>
            <p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"}</p>
            <a href="${item.link["@id"]}" target="_blank">書籍情報</a>
          </div>
        </li>`;

        $(".lists").prepend(listItem);
      });
    } else {
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    }
  }

  // エラーメッセージを表示する関数
  function displayError(err) {
    $(".lists").empty(); // 検索結果リストを空にする
    $(".message").remove(); // メッセージを削除

    if (err.status === 0) {
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    } else if (err.status === 400) {
      $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>1文字以上で検索してください。</div>');
    } else {
      $(".lists").before('<div class="message">予期せぬエラーが発生しました。<br>再読み込みを行ってください。</div>');
    }
  }
});

// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });
