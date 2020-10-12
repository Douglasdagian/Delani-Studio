$(".image").click(function () {
  $(this).children(".show").slideToggle();
  $(this).children("#show").toggle();
});


$(document).ready(function(){
  $("form").submit(function(){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var text = $("textarea#hen").val();
    if ($("input#name").val() && $("input#email").val()){
      alert(name + "thank you for your feedback");
    }
  });
});
$(document).ready(function(){
  $(".mask").hover(function(){
    $("#us1").toggle();
  });
  $(".none").hover(function(){
    $("#us2").toggle();
  });
  $(".none").hover(function(){
    $("#us3").toggle();
  });
  $(".none").hover(function(){
    $("#us").toggle();
  });
  $(".none").hover(function(){
    $("#us").toggle();
  });
  $(".none").hover(function(){
    $("#us").toggle();
  });
  $(".none").hover(function(){
    $("#us").toggle();
  });
  $(".none").hover(function(){
    $("#us").toggle();
  });
});