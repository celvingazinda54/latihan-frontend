function myFunction() {
    var x = document.getElementById("hide_show");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

document.querySelector("leftbar").addEventListener("click", () => {
  document.querySelector("leftbar").classList.toggle("leftbar");
})

window.addEventListener('resize', () => {
  // Toggle on mobile
  if (window.innerWidth <= 768) {
    myFunction()

  }
});