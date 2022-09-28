

var outPut = document.querySelector(".output");
var inPut = document.querySelector(".range-slider");

inPut.value + "px";

inPut.addEventListener("input", function () {
    outPut.style.borderWidth = inPut.value + "px";
});
