function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function(e) {
  if (!e.target.matches('.dropdown')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  if (window.scrollY > 20) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }
};

// Biar semua link eksternal buka di tab baru
document.querySelectorAll("a[href]").forEach(link => {
  let href = link.getAttribute("href");

  // kalau link mulai dengan http (eksternal), tapi bukan mailto: atau tel:
  if (href && href.startsWith("http")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});
