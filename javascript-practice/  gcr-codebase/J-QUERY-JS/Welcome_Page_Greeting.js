
$(document).ready(function () {

    // 1. Greeting according to time
    let hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    }
    else if (hour < 17) {
        $("#greeting").text("Good Afternoon!");
    }
    else {
        $("#greeting").text("Good Evening!");
    }

    // 2. Change greeting button
    $("#changeGreeting").click(function () {
        $("#greeting").text(
            "Believe in yourself! Never give up!"
        );
    });

    // 3. Toggle welcome message
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // 4. Alert when greeting is clicked
    $("#greeting").click(function () {
        alert("Welcome to our website!");
    });

});
