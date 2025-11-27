const search = document.getElementById("search");
const rows = [...document.querySelectorAll("#studentTable tr")];
const noRes = document.getElementById("noResult");

search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  let visible = 0;

  rows.forEach(r => {
    const text = r.textContent.toLowerCase();
    if (text.includes(val)) {
      r.style.display = "";
      visible++;
    } else {
      r.style.display = "none";
    }
  });

  noRes.style.display = visible === 0 ? "block" : "none";
});
