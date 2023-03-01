var sections = document.getElementsByTagName("section");
for (var i = 0; i < sections.length; i++) {
  var ul = sections[i].getElementsByTagName("ul")[0];
  ul.style.display = "none";
}
window.onload = function() {
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++) {
    var ul = sections[i].getElementsByTagName("ul")[0];
    ul.style.display = "none";
    var h3 = sections[i].getElementsByTagName("h3")[0];
    h3.onclick = function() {
      var ul = this.nextElementSibling;
      if (ul.style.display === "none") {
        ul.style.display = "block";
      } else {
        ul.style.display = "none";
      }
    }
  }
}
