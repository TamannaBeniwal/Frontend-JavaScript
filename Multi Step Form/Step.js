const steps = [...document.querySelectorAll(".step")];
let current = 0;

function showStep(n) {
  steps.forEach((s, i) => s.style.display = i === n ? "block" : "none");
}

document.getElementById("next1").onclick = () => {
  if (document.getElementById("name").value.trim() === "") {
    alert("Name required");
    return;
  }
  current = 1;
  showStep(current);
};

document.getElementById("next2").onclick = () => {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Invalid email");
    return;
  }
  current = 2;
  showStep(current);
};

document.getElementById("finish").onclick = () => {
  const pwd = document.getElementById("password").value;
  if (pwd.length < 6) {
    alert("Password must be 6+ characters");
    return;
  }

  document.getElementById("summary").innerHTML = `
    <h3>Summary</h3>
    Name: ${document.getElementById("name").value}<br>
    Email: ${document.getElementById("email").value}<br>
  `;
  document.getElementById("summary").style.display = "block";
  steps.forEach(s => s.style.display = "none");
};

// Back buttons
document.getElementById("back1").onclick = () => { current = 0; showStep(current); };
document.getElementById("back2").onclick = () => { current = 1; showStep(current); };
