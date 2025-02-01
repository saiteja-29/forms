document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting
  validateForm();
});

function validateForm() {
  // Fetch input values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  let isValid = true;

  // Validate Full Name
  if (fullName.length < 5) {
    displayError("nameError", "Full Name must be at least 5 characters long.");
    isValid = false;
  } else {
    hideError("nameError");
  }

  // Validate Email
  if (!email.includes("@")) {
    displayError("emailError", "Enter a valid email address.");
    isValid = false;
  } else {
    hideError("emailError");
  }

  // Validate Phone Number
  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    displayError("phoneError", "Enter a valid 10-digit phone number.");
    isValid = false;
  } else {
    hideError("phoneError");
  }

  // Validate Password
  if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
    displayError("passwordError", "Password must be at least 8 characters and cannot be 'password' or your name.");
    isValid = false;
  } else {
    hideError("passwordError");
  }

  // Validate Confirm Password
  if (password !== confirmPassword) {
    displayError("confirmPasswordError", "Passwords do not match.");
    isValid = false;
  } else {
    hideError("confirmPasswordError");
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
    // Optionally clear the form
    document.getElementById("registrationForm").reset();
  }
}

function displayError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideError(id) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = "";
  errorElement.style.display = "none";
}
