//without removing the html from the page (only hides them)

$("div").on("click", function () {
    $("div").fadeOut(2000);
});

$("div").on("click", function () {
    $("div").fadeToggle(2000);
});

$("button").on("click", function () {
    $("div").slideToggle(2000);
});


// removing the htm elements from the page (deletes them)

$("button").on("click", function () {
    $("div").fadeOut(2000, function () {
        $(this).remove();
    });
});


