// Navbar Design

let nav = document.querySelector(".navigation-wrapper");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navlink = document.querySelectorAll(".nav-link");

let navCollapase = document.querySelector(".navbar-collapse.collapse");

navlink.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapase.classList.remove("show");
  });
});
