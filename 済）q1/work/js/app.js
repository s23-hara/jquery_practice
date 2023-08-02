//Q1
$(function () {
  // ドキュメントが読み込まれた時に実行されるコールバック関数
  $("#q1").css("color", "green");
});

//Q2
$(function () {
  // ボタンがクリックされた時に実行されるコールバック関数
  $("#q2").on("click", function () {
    // ボタンの背景色をピンクに変更
    $(this).css("background-color", "pink");
  });
});

//Q3
$(function () {
  // ボタンがクリックされた時に実行されるコールバック関数
  $("#q3").on("click", function () {
    // ボタンを3秒かけてフェードアウト
    $(this).fadeOut(3000);
  });
});

//Q4
$(function () {
  // ボタンがクリックされた時に実行されるコールバック関数
  $("#q4").on("click", function () {
    // ボタンのサイズを変更
    $(this).addClass("large");
  });
});

//Q5
$(function () {
  // ボタンがクリックされた時に実行されるコールバック関数
  $("#q5").on("click", function () {
    // DOM要素を特定の位置に挿入
    $(this).prepend("DOM\u306e\u4e2d\u306e\u524d").append("DOM\u306e\u4e2d\u306e\u5f8c").before("DOM\u306e\u524d").after("DOM\u306e\u5f8c")
  });
});

//Q6
$(function () {
  // ボタンがクリックされた時に実行されるコールバック関数
  $("#q6").on("click", function () {
    // 要素のアニメーション
    $(this).animate({
      "margin-top": "100px",
      "margin-left": "100px"
    }, 2000);
  });
});

//Q7
$(function () {
  // ボタンがクリックされた時に実行されるコールバック関数
  $("#q7").on("click", function () {
    // idのノードをコンソールに表示
    console.log((this));
  });
});

//Q8
$(function () {
  // ボタンにマウスが乗った時に実行されるコールバック関数
  $("#q8").on({
    mouseenter: function () {
      // ボタンのサイズを大きくする
      $(this).addClass("large");
    },
    mouseleave: function () {
      // ボタンのサイズを元に戻す
      $(this).removeClass("large");
    }
  });
});

//Q9
$("#q9 li").on("click", function () {
  // クリックされた要素のインデックスを取得
  var a = $(this).index();
  // インデックスをアラートとして表示
  alert(a);
});

//Q10
$(function () {
  // Q10のボタンをクリックした時の処理
  $("#q10 li").on("click", function () {
    // クリックされたボタンのインデックスを取得
    var index = $(this).index();
    // 対応するQ11のボタンを大きくする
    $("#q11 li").eq(index).addClass("large-text");
  });
});
