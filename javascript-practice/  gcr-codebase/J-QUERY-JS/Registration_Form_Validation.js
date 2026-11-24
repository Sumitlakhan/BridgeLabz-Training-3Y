
$(document).ready(function () {

    // Already registered emails
    let registeredEmails = [
        "test@gmail.com",
        "sumit@gmail.com"
    ];

    $("#registrationForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim().toLowerCase();
        let password = $("#password").val();

        let valid = true;

        // Reset old borders
        $("input").css("border", "1px solid black");

        $("#message").text("");

        // 1. Validate name
        if (name === "") {

            $("#name").css("border", "2px solid red");

            valid = false;

        }

        // 2. Validate email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            $("#email").css("border", "2px solid red");

            valid = false;

        }

        // Check email uniqueness
        else if (registeredEmails.includes(email)) {

            $("#email").css("border", "2px solid red");

            valid = false;

            $("#message").text("Email already registered!");

        }

        // 3. Validate password
        if (password.length < 8) {

            $("#password").css("border", "2px solid red");

            valid = false;

        }

        // 4. Show success message
        if (valid) {

            $("#message")
                .css("color", "green")
                .text("Registration Successful!");

            registeredEmails.push(email);

            $("#registrationForm")[0].reset();

        } else {

            $("#message")
                .css("color", "red")
                .text("Please enter valid details!");

        }

    });

});
