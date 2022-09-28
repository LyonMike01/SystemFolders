

var inPut = document.querySelector("button");
var naMe = "Simeon";
var height = "75cm";
var country = "Nigerian";
var me = "My Name is " + naMe + ", " + "I am " + height + " Tall and I'm a " + country;  

inPut.addEventListener ("click", function () {
    document.querySelector("h1").textContent = me;
})