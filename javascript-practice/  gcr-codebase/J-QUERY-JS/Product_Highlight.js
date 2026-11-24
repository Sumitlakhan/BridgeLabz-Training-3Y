
$(document).ready(function () {

    // 1. Click product to highlight
    $(".product").click(function (event) {
        if ($(event.target).closest(".favorite").length) return;

        $(this).toggleClass("highlight");

        // 5. Check stock using data attribute
        if ($(this).attr("data-stock") === "no") {
            alert("Product is out of stock!");
        }
    });

    // 2. Hover to show product details
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    // 3. Favorite button
    $(".favorite").click(function (event) {
        event.stopPropagation();

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {
            $(this).text("♥");
        } else {
            $(this).text("♡");
        }
    });

});
