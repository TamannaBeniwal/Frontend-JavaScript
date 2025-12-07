function loadTasks(filter = "") {
    let url = "http://localhost:3000/tasks";

    if (filter === "completed") {
        url += "?completed=true";
    } else if (filter !== "") {
        url += "?priority=" + filter;
    }

    $.ajax({
        url,
        method: "GET",
        success: function (tasks) {
            $("#tasks").empty();

            tasks.forEach(t => {
                $("#tasks").append(`
                    <div>
                        <input type="checkbox" ${t.completed ? "checked" : ""} 
                        onclick="toggleTask(${t.id}, ${t.completed})">
                        <strong>${t.title}</strong> - ${t.priority}
                    </div>
                `);
            });
        }
    });
}

function toggleTask(id, completed) {
    $.ajax({
        url: "http://localhost:3000/tasks/" + id,
        method: "PATCH",
        data: { completed: !completed },
        success: () => loadTasks($("#filter").val())
    });
}

$("#filter").on("change", function () {
    loadTasks($(this).val());
});

loadTasks();
