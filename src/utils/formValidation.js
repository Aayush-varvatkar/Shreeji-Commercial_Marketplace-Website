/**
 * Validation utilities for Contact Us form fields.
 */

export const validateName = (name) => {
  const trimmed = (name || '').trim();
  if (!trimmed) {
    return 'Name is required.';
  }
  if (trimmed.length < 2) {
    return 'Name must contain at least 2 characters.';
  }
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(trimmed)) {
    return 'Name must contain letters and spaces only.';
  }
  return '';
};

export const validateEmail = (email) => {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return 'Email address is required.';
  }
  // Standard strict email format regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Please enter a valid email address (e.g. name@example.com).';
  }
  return '';
};

export const validatePhone = (phone, countryCode = '+91') => {
  const trimmed = (phone || '').trim();
  if (!trimmed) {
    return 'Phone number is required.';
  }
  // Reject letters and special characters
  if (/[a-zA-Z]/.test(trimmed)) {
    return 'Phone number must contain digits only.';
  }
  
  const digitsOnly = trimmed.replace(/\D/g, '');

  if (countryCode === '+91' || !countryCode) {
    // Validate Indian 10-digit mobile number starting with 6, 7, 8, 9
    const indianMobileRegex = /^[6-9]\d{9}$/;
    if (!indianMobileRegex.test(digitsOnly)) {
      return 'Please enter a valid 10-digit Indian mobile number starting with 6-9.';
    }
  } else {
    // International phone number validation: between 7 and 15 digits
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return 'Please enter a valid phone number (7 to 15 digits).';
    }
  }
  return '';
};

export const validateConsent = (consent) => {
  if (!consent) {
    return 'Please consent to the privacy policy to proceed.';
  }
  return '';
};
