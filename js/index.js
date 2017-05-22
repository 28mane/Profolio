$(document).ready(function(){
  $("#about").click(function(){
    $(this).slideUp(200).slideDown(200);
    /*$(".portfolio").hide();
    $(".contactMe").hide();
    $(".about").show().css("font-size", "60px");*/
  }
 );
   $("#portfolio").click(function(){
    $(this).slideUp(200).slideDown(200);
    /*$(".portfolio").show().css("font-size", "60px");
    $(".contactMe").hide();
    $(".about").hide();*/
  });
   $("#contactMe").click(function(){
    $(this).slideUp(200).slideDown(200);
    /*$(".portfolio").hide();
    $(".contactMe").show();
    $(".email").css("font-size", "60px")
    $(".about").hide(); */  
  });
   $("#img1").click(function(){
      $(".about").show().css("font-size", "40px");
      $(".portfolio").show().css("font-size", "40px");
      $(".email").show().css("font-size", "40px");
   });

   $(".jumper").on("click", function( e ) {   
    /*e.preventDefault();*/
    $("body, html").animate({scrollTop: $($(this).attr('href')).offset().top}, 600);
    });
});
   $(".jumper").on("click", function( e ) {   
    e.preventDefault();
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 60);
    });