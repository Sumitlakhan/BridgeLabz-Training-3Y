$(function () {
  // Example list of already registered email addresses.
  const registeredEmails = ["test@example.com", "sumit@example.com"];

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim().toLowerCase();
    const password = $("#password").val();

    let valid = true;
    $("#registrationForm input").css("border", "1px solid #999");
    $("#message").css("color", "red").text("");

    // Validate that the name is not empty.
    if (!name) {
      $("#name").css("border", "2px solid red");
      valid = false;
    }

    // Validate email format and check that it is not already registered.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || registeredEmails.includes(email)) {
      $("#email").css("border", "2px solid red");
      valid = false;
    }

    // Password must contain at least eight characters.
    if (password.length < 8) {
      $("#password").css("border", "2px solid red");
      valid = false;
    }

    if (valid) {
      $("#message").css("color", "green").text("Registration successful!");
      registeredEmails.push(email);
      this.reset();
    } else {
      $("#message").text("Please correct the highlighted fields. Email must be valid and unique.");
    }
  });
});
