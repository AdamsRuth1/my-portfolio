const toggleBtn = document.getElementById("hamburger");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const tl = gsap.timeline({defaults: {duration:3}})
tl.fromTo('.display', {scale:0}, {scale:1})
gsap.fromTo('.magic', {x: 500, opacity: 1}, {opacity: 1, x:0, duration: 50})
gsap.fromTo('.logo', {x: 500, opacity: 1}, {opacity: 1, x:0, duration: 20})
gsap.fromTo('.links', {x: 500, opacity: 1}, {opacity: 1, x:0, duration: 10})
gsap.fromTo('.social-icons', {x: 800, opacity: 1}, {opacity: 1, x:0, duration: 20})
// tl.fromTo(
//     '.sidebar',
//     { yPercent: -100, opacity: 0 },
//     { yPercent: 0, opacity: 1 }
//   );

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");

});

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}
