/* funksioni menu */

$('.menubox').on('click', function() {
    menuFunction(this);
});

var open=false;
function menuFunction(x) {
x.classList.toggle("change");

if(!open)
{
document.getElementsByClassName("ShtresaMenu")[0].style.height = "100%";
document.getElementById("qmob").style.display="none";

open=true;
}
else {
document.getElementsByClassName("ShtresaMenu")[0].style.height = "0%";

if($(window).width() < 576)
{
document.getElementById("qmob").style.display="block"; }
open=false;
}
}