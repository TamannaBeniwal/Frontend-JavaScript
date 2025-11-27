document.body.setAttribute("data-theme", "light");

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.setAttribute("data-theme", btn.dataset.theme);
  });
});
