function loadEmployees() {
    const req = new XMLHttpRequest();
    req.open("GET", "http://localhost:3000/employees");
    req.onload = function () {
        const employees = JSON.parse(this.responseText);
        document.getElementById("list").innerHTML = "";

        employees.forEach(e => {
            const row = document.createElement("div");
            row.className = "emp";
            row.innerHTML = `
                <strong>${e.name}</strong> - ${e.status}
                <button onclick="toggleStatus(${e.id}, '${e.status}')">
                    Toggle
                </button>
            `;
            document.getElementById("list").appendChild(row);
        });
    };
    req.send();
}

function toggleStatus(id, currentStatus) {
    const newStatus = currentStatus === "active" ? "inactive" : "active";

    const req = new XMLHttpRequest();
    req.open("PATCH", "http://localhost:3000/employees/" + id);
    req.setRequestHeader("Content-Type", "application/json");

    req.onload = function () {
        if (req.status >= 200 && req.status < 300) {
            loadEmployees();
        } else {
            alert("Error updating status!");
        }
    };

    req.send(JSON.stringify({ status: newStatus }));
}

loadEmployees();
