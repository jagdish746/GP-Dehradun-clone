const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const navbar = document.getElementById('navbar');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.onclick = () => {
  navbar.classList.add('show');
  hamburger.classList.add('hide');
  closeBtn.classList.add('show');
};

closeBtn.onclick = () => {
  navbar.classList.remove('show');
  hamburger.classList.remove('hide');
  closeBtn.classList.remove('show');
  dropdowns.forEach(d => d.classList.remove('active'));
};

dropdowns.forEach(drop => {
  drop.querySelector('.dropbtn').addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      drop.classList.toggle('active');
      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove('active');
      });
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    hamburger.classList.remove('hide');
    closeBtn.classList.remove('show');
    navbar.classList.remove('show');
    dropdowns.forEach(d => d.classList.remove('active'));
  }
});


     const images = document.querySelectorAll(".slider img");
    const total = images.length;
    let current = 0;

    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.remove("active");
      });
      images[index].classList.add("active");
    }

    document.querySelector(".next").addEventListener("click", () => {
      current = (current + 1) % total;
      showSlide(current);
    });

    document.querySelector(".prev").addEventListener("click", () => {
      current = (current - 1 + total) % total;
      showSlide(current);
    });

    setInterval(() => {
      current = (current + 1) % total;
      showSlide(current);
    }, 5000);