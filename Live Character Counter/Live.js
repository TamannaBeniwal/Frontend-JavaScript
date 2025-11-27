const text = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX = 100;

text.addEventListener("input", () => {
  const remaining = MAX - text.value.length;

  counter.textContent = `${remaining} characters left`;

  counter.style.color =
    remaining <= 0 ? "red" :
    remaining <= 20 ? "gold" : "black";
});

text.addEventListener("keydown", (e) => {
  if (text.value.length >= MAX && e.key !== "Backspace") {
    e.preventDefault();
  }
});

resetBtn.addEventListener("click", () => {
  text.value = "";
  counter.textContent = "100 characters left";
  counter.style.color = "black";
});
