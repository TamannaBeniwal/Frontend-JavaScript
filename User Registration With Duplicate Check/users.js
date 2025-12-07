document.getElementById("register").onclick = function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    axios.get("http://localhost:3000/users?email=" + email)
        .then(res => {
            if (res.data.length > 0) {
                document.getElementById("msg").innerText = "Email already registered.";
            } else {
                axios.post("http://localhost:3000/users", { name, email })
                    .then(() => {
                        document.getElementById("msg").innerText = "Registration successful!";
                    });
            }
        });
};
