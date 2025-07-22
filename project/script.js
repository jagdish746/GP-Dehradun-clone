
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