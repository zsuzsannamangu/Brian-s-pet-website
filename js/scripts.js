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
