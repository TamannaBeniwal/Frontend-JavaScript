const btn = document.getElementById("dropdownBtn");
const opts = document.getElementById("options");

btn.addEventListener("click", () => {
  opts.style.display = opts.style.display === "none" ? "block" : "none";
});

// Capture phase for closing
document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !opts.contains(e.target)) {
    opts.style.display = "none";
  }
}, true);

document.querySelectorAll(".opt").forEach(opt => {
  opt.addEventListener("click", () => {
    btn.textContent = opt.textContent;
    opts.style.display = "none";
  });
});
