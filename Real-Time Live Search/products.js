$(document).ready(function () {
    $("#search").on("keyup", function () {
        let q = $(this).val();

        $("#loading").show();

        $.ajax({
            url: "http://localhost:3000/products?q=" + q,
            method: "GET",
            success: function (products) {
                $("#loading").hide();
                $("#results").empty();

                if (products.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                products.forEach(p => {
                    $("#results").append(`
                        <div class="product">
                            <img src="${p.image}">
                            <div>
                                <h4>${p.name}</h4>
                                <p>Price: ₹${p.price}</p>
                            </div>
                        </div>
                    `);
                });
            }
        });
    });
});
