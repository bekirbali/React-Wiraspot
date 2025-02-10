function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  // This is a basic validation - you might want to use a more sophisticated one
  const phoneRegex = /^\+?[\d\s-()]{10,}$/;
  return phoneRegex.test(phone);
}

export function validateContactForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) {
  const errors = [];

  // Validate firstName
  if (!firstName || firstName.trim().length === 0) {
    errors.push({ field: "firstName", message: "First name is required" });
  }

  // Validate lastName
  if (!lastName || lastName.trim().length === 0) {
    errors.push({ field: "lastName", message: "Last name is required" });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push({ field: "email", message: "Valid email is required" });
  }

  // Validate phoneNumber (optional but must be valid if provided)
  if (phoneNumber) {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      errors.push({
        field: "phoneNumber",
        message: "Please enter a valid phone number",
      });
    }
  }

  // Validate message
  if (!message || message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters long",
    });
  }

  return errors;
}
