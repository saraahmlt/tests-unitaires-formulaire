const verifierConditions = require('./form');

describe('Tests unitaires pour la fonction de validation du formulaire', () => {
    // Test 1: Nom d'utilisateur trop court
    test('Nom d\'utilisateur trop court', () => {
        const { isValid, errors } = verifierConditions('us', 'user@example.com', 'password123');
        
        expect(isValid).toBe(false);
        expect(errors.usernameError).toBe('Le nom d\'utilisateur doit contenir au moins 3 caractères.');
        expect(errors.emailError).toBe('');
        expect(errors.passwordError).toBe('');
    });

    // Test 2: Mot de passe trop court
    test('Mot de passe trop court', () => {
        const { isValid, errors } = verifierConditions('user123', 'user@example.com', 'pass');
        
        expect(isValid).toBe(false);
        expect(errors.passwordError).toBe('Le mot de passe doit contenir au moins 8 caractères.');
        expect(errors.usernameError).toBe('');
        expect(errors.emailError).toBe('');
    });

    test('Email invalide', () => {
        const { isValid, errors } = verifierConditions('user123', 'invalid-email', 'password123');
        
        expect(isValid).toBe(false);
        expect(errors.emailError).toBe('Veuillez entrer une adresse email valide.');
        expect(errors.usernameError).toBe('');
        expect(errors.passwordError).toBe('');
    });

    // Test 4: Tous les champs valides
    test('Tous les champs sont valides', () => {
        const { isValid, errors } = verifierConditions('user123', 'user@example.com', 'password123');
        
        expect(isValid).toBe(true);
        expect(errors.usernameError).toBe('');
        expect(errors.emailError).toBe('');
        expect(errors.passwordError).toBe('');
    });
});
