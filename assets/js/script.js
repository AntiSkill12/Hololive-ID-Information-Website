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

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // cegah reload default

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
      alert("❌ Semua field wajib diisi!");
      return;
    }

    // regex longgar: asal ada @
    const emailPattern = /.+@.+/;
    if (!email.match(emailPattern)) {
      alert("❌ Format email tidak valid!");
      return;
    }

    // jika lolos
    alert("✅ Data valid. Siap dikirim!\nNama: " + nama + "\nEmail: " + email + "\nPesan: " + pesan);

    // reset form biar kosong lagi
    form.reset();
  });
});

