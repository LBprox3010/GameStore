window.addEventListener("scroll", function () {
  let header = document.querySelector(".banner-menu");
  header.classList.toggle("sticky", window.scrollY > 0);
});
