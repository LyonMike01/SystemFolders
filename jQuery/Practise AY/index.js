/*
diff

$("h1").click(function () {
      $("h1").css("color", "purple");  
}); 

former approach diff

for (let i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "green";
    });
    
} 

diff

$("button").click(function () {
        $("h1").css("color", "pink");
}); 

diff

$("input").keypress(function (event) {
   console.log(event.key);
}); 


diff

$("input").keypress(function (event) {
    $("h1").text(event.key);
 }); 

 diff

 $("h1").mouseover(diego);

 function diego() {
     $("h1").css("color", "pink");
 } 

diff

 $("h1").on("mouseover", function () {
        $("h1").css("color", "purple");
 });  

diff  add/remove html

 $("h1").before("<button>New</button>");
 $("h1").after("<button>New</button>");
 $("h1").prepend("<button>New</button>");
 $("h1").append("<button>New</button>");

 

 Animation 

$("button").on("click", function() {
    $("h1").hide();
    $("h1").show();
    $("h1").toggle();
    $("h1").fadeOut();
    $("h1").fadeIn();
    $("h1").fadeToggle();
    $("h1").slideUp();
    $("h1").slideDown();
    $("h1").slideUp().slideDown().animate({margin: 20, opacity: 0.2, fontSize: 70});
});

*/