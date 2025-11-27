const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const bigImg = document.getElementById("bigImg");

document.querySelectorAll("#gallery img").forEach(img => {
  img.addEventListener("click", () => {
    bigImg.src = img.src;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => modal.style.display = "none");

modalContent.addEventListener("click", e => e.stopPropagation());
