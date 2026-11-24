
$(document).ready(function () {

    // 1. Subscribe and enable notifications
    $("#topics").on("click", ".subscribe", function () {
        $(this).text("Subscribed");
        $(this).prop("disabled", true);

        $("#message").text("Notifications are ON!");
    });

    // 2. Unsubscribe and disable notifications
    $("#topics").on("click", ".subscribe:disabled", function () {
        $(this).text("Subscribe");
        $(this).prop("disabled", false);

        $("#message").text("Notifications are OFF!");
    });

    // 3. Dynamically add new subscription topics
    $("#addTopic").click(function () {
        let topic = $("#newTopic").val().trim();

        if (topic === "") {
            alert("Please enter a topic");
            return;
        }

        let item = $("<li></li>").text(topic + " ");

        item.append('<button class="subscribe">Subscribe</button> ');
        item.append('<button class="remove">Remove</button>');

        $("#topics").append(item);

        $("#newTopic").val("");
        $("#message").text("New topic added successfully!");
    });

    // 4. Remove specific subscription
    $("#topics").on("click", ".remove", function () {
        // Detach events from selected item
        $(this).closest("li").off();

        $(this).closest("li").remove();

        $("#message").text("Topic removed successfully!");
    });

});
