$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        name: $(".addBurgerButton").val().trim(),

    };

    // Send the POST request.
    $.ajax("/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

// $(".burgerAvailable").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();
//     var id = $(this).attr("id");
//     $.ajax("/burgers/" + id, {
//         type: "PUT"
//     }).then(
//         function () {
//             console.log("updated burger");
//             // Reload the page to get the updated list
//             location.reload();
//         }
//     );
// });
