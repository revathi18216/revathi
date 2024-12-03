document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
    } else {
        message.textContent = "Registration successful!";
        message.style.color = "green";
        // Optionally, you can send the data to the server here.
        console.log({ username, email });
    }
});
