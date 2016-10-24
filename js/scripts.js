$("form#favorite").submit(function() {
    var favorite = $(["input#fruit", "input#nut", "input#band", "input#color"]).val();

      fruit.push ( favorite );
      nut.push ( favorite ) ;
      band.push ( favorite );
      color.push ( favorite );

    $("#fruit").show();
    alert('Banana');

    event.preventDefault();
 });
});


    //var nut = $("input#nut").val();
    //var band = $("input#band").val();
    //var color = $("input#color").val();
    //var favorite = $(["input#fruit", "input#nut", "input#band", "input#color"]).val();

    //$(".band").text(band);
    //$(".nut").text(nut);
    //$(".color").text(color);
    //$(".fruit").text(fruit);
    //$("#result").show();
    //event.preventDefault();
