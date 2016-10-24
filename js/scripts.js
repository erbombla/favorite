$(document).ready(function(){

$("form#favorite").submit(function(event) {
  debugger;
    var fruit = $("input#fruit").val();
    var nut = $("input#nut").val();
    var band = $("input#band").val();
    var color = $("input#color").val();

    var favorite = [fruit, nut, band, color];
    var fav2 =[];

      fav2.push(favorite[2],favorite[1], favorite[3]);
      $(".list1").text( fav2[0]);
      $(".list2").text( fav2[1]);
      $(".list3").text( fav2[2]);

  event.preventDefault();
 });
});
