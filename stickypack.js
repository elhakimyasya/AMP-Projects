const stickyDiv = document.querySelector("aside");
window.addEventListener("scroll", function() {
  stickyDiv.style.top = window.pageYOffset + "px";
});
