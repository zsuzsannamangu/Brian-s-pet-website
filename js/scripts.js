$(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-setting");
  });
});

$(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-setting");
  });
});

$(function() {
  $("button#original").click(function() {
    $("body").removeClass();
  });
});

$(function() {
  $("#clickable").click(function() {
    $("#clickable").addClass("highlight")
  });
});
