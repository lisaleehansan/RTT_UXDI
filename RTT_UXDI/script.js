var contY = $(".container").offset().top
$(document).on("scroll", function(e){
  if($(this).scrollTop() > contY - 400){
    $(".container").addClass("is-visible")
  }
})