function verifierConditions(username, email, password) {
    let isValid = true;
    let errors = {};

    if (username.length < 3) {
        errors.usernameError = 'Le nom d\'utilisateur doit contenir au moins 3 caractères.';
        isValid = false;
    } else {
        errors.usernameError = '';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errors.emailError = 'Veuillez entrer une adresse email valide.';
        isValid = false;
    } else {
        errors.emailError = '';
    }

    if (password.length < 8) {
        errors.passwordError = 'Le mot de passe doit contenir au moins 8 caractères.';
        isValid = false;
    } else {
        errors.passwordError = '';
    }

    return { isValid, errors };
}



module.exports = verifierConditions;  


