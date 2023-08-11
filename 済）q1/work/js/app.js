$(function () {
  // Q1
  $("#q1").css("color", "green");

  // Q2
  $("#q2").on("click", function () {
    $(this).css("background-color", "pink");
  });

  // Q3
  $("#q3").on("click", function () {
    $(this).fadeOut(3000);
  });

  // Q4
  $("#q4").on("click", function () {
    $(this).addClass("large");
  });

  // Q5
  $("#q5").on("click", function () {
    $(this).prepend("前に追加").append("後ろに追加").before("前に挿入").after("後ろに挿入");
  });

  // Q6
  $("#q6").on("click", function () {
    $(this).animate({
      "margin-top": "100px",
      "margin-left": "100px"
    }, 2000);
  });

  // Q7
  $("#q7").on("click", function () {
    console.log(this);
  });

  // Q8
  $("#q8").on({
    mouseenter: function () {
      $(this).addClass("large");
    },
    mouseleave: function () {
      $(this).removeClass("large");
    }
  });

  // Q9
  $("#q9 li").on("click", function () {
    var clickedIndex = $(this).index();
    alert("クリックされた要素のインデックス: " + clickedIndex);
  });

  // Q10
  $("#q10 li").on("click", function () {
    var clickedIndex = $(this).index();
    $("#q11 li").eq(clickedIndex).addClass("large-text");
  });
});
