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
  $(".mask1").hover(function(){
    $("#us1").toggle();
  });
  $(".mask2").hover(function(){
    $("#us2").toggle();
  });
  $(".mask3").hover(function(){
    $("#us3").toggle();
  });
  $(".mask4").hover(function(){
    $("#us4").toggle();
  });
  $(".mask5").hover(function(){
    $("#us5").toggle();
  });
  $(".mask6").hover(function(){
    $("#us6").toggle();
  });
  $(".mask7").hover(function(){
    $("#us7").toggle();
  });
  $(".mask8").hover(function(){
    $("#us8").toggle();
  });
});