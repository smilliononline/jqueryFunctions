$(document).ready(function () {
   $('button').click(function(){
       alert("WHATTT!");
   });
   $('button').click(function() {
       $('#derp').hide();
   });
   $('button').click(function(){
       $('#derp').show();
   });
   $('h1').click(function(){
       $(this).toggle();
    });
    $('#blurp').hover(function (){
        $(this).fadeOut(100);
        $(this).fadeIn(500);
    });
    $('h2').addClass('woop');

    $('h1').before("<h1>HEY ITS ME AGAIN!</h1>");

    $('li').last().append(" Holy Smokes!");

    $("#hoot").html('<span style="color:red"> HOOT </span>');

    $('#durg').text("Hey i am changing the text..what's up now JQuery?? ya.");

  });
  