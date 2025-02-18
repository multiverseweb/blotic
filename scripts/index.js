function show() {
    document.getElementById("hide").style.display="block";
    document.getElementById("show").style.display = "none";
    document.getElementById("navbar").style.display="flex";
}
function hide() {
    document.getElementById("show").style.display = "block";
    document.getElementById("navbar").style.display="none";
    document.getElementById("hide").style.display="none";
}


var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
