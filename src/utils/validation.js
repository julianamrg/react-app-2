export const validateNIT = (nit) => {
    const nitPattern = /^[0-9]{1,10}$/; // NIT should be numeric and up to 10 digits
    return nitPattern.test(nit);
};

export const validateCompanyName = (name) => {
    return name.trim().length > 0; // Company name should not be empty
};

export const validateAddress = (address) => {
    return address.trim().length > 0; // Address should not be empty
};

export const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{7,15}$/; // Phone should be numeric and between 7 to 15 digits
    return phonePattern.test(phone);
};

export const validateProductCode = (code) => {
    return code.trim().length > 0; // Product code should not be empty
};

export const validateProductName = (name) => {
    return name.trim().length > 0; // Product name should not be empty
};

export const validateProductPrice = (price) => {
    return !isNaN(price) && price > 0; // Price should be a positive number
};

export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return emailPattern.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6; // Password should be at least 6 characters long
};