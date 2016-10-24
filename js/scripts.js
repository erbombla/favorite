$("form#favorite").submit(function() {
    var fruit = $("input#fruit").val();
    var nut = $("input#nut").val();
    var band = $("input#band").val();
    var color = $("input#color").val();


    $(".fruit").text(fruit);
    $(".nut").text(nut);
    $("band").text(band);
    $(".color").text(color);


    $("#survey-hidden").show();
    $(".survey-hidden").hide();

    event.preventDefault();

  });
});
