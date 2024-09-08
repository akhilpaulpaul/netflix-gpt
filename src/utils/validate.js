export const checkValidData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if(!isValidEmail) {
        return 'Please enter a valid email';
    }
    else if (!isValidPassword) {
        return 'Please enter a valid password';
    }
    else {
        return null;
    }
}