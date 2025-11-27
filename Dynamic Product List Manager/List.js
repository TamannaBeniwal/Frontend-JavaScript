const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${input.value}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  list.appendChild(li);
  input.value = "";
});

// EVENT DELEGATION
let currentEditing = null;

list.addEventListener("click", (e) => {
  const li = e.target.closest("li");

  if (e.target.classList.contains("delete")) {
    li.remove();
  }

  if (e.target.classList.contains("edit")) {
    if (currentEditing) finishEdit();
    startEdit(li);
  }
});

function startEdit(li) {
  currentEditing = li;
  const span = li.querySelector(".text");

  const input = document.createElement("input");
  input.type = "text";
  input.value = span.textContent;

  li.replaceChild(input, span);
  input.focus();
}

function finishEdit() {
  if (!currentEditing) return;
  const input = currentEditing.querySelector("input");
  const span = document.createElement("span");
  span.className = "text";
  span.textContent = input.value;
  currentEditing.replaceChild(span, input);
  currentEditing = null;
}

// Auto-save on click outside
document.addEventListener("click", (e) => {
  if (currentEditing && !currentEditing.contains(e.target)) {
    finishEdit();
  }
});

