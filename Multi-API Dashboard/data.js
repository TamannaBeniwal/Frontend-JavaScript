const urls = [
    fetch("http://localhost:3000/users"),
    fetch("http://localhost:3000/orders"),
    fetch("http://localhost:3000/products")
];

Promise.all(urls.map(p => p.catch(err => err)))
    .then(async responses => {
        let failed = false;

        const data = await Promise.all(
            responses.map(async r => {
                if (!r.ok) { failed = true; return []; }
                return r.json();
            })
        );

        document.getElementById("users").innerText = "Total Users: " + data[0].length;
        document.getElementById("orders").innerText = "Total Orders: " + data[1].length;
        document.getElementById("products").innerText = "Total Products: " + data[2].length;

        if (failed) {
            document.getElementById("warning").innerText = "Some data could not be loaded.";
        }
    });
