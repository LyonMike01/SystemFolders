

//Few functions of jQuery
/*
$("input").val();
$("input").attr();
$("input").text();
$("input").html();
$("input").addClass();
$("input").removeClass();
$("input").toggleClass();
*/

$("button").click(function () {
    $("h1").text("Emilokan ni Tech Yii");
     $("h1").css("color", "purple");
     $("h1").fadeToggle().slideUp().slideDown();
 });

 $("button").click(function () {
    $(this).css("background", "purple");
});

$("input[type='number']");

$('input[type="text"]').keypress(function (ell) {
    console.log(ell.which);
});

$('input[type="text"]').keypress(function (ell) {
    console.log(ell.key);
});

$('input[type="text"]').keypress(function (ell) {
    if (ell.which === 13){
        alert("You don enter");
    }  
 });

 $("button").on("mouseenter", function () {
    $(this).css("fontSize", "40px");
  });