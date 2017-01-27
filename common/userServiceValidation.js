// Validations for front-end. Also re-run on server.
const clientValidations = {};

// sync validation of signup form on form submit
clientValidations.signup = values => {
    const errors = {};

    checkName(values.name, errors);
    checkUsername(values.username, errors);
    checkEmail(values.email, errors);
    checkPassword(values.password, errors);
    checkConfirmPassword(values.password, values.confirmPassword, errors);

    return errors;
};

// async validation on exit from some fields on form
clientValidations.signupAsync = values =>
    new Promise((resolve, reject) => {
        const errs = {};

        // set a dummy error
        errs.email = 'Already taken.';

        if (!Object.keys(errs).length) {
            resolve(null); // 'null' as we did not sanitize 'values'
        }
        reject(new errors.BadRequest('Values already taken.', { errors: errs }));
    });

module.exports = clientValidations;

function checkName(name, errors, fieldName = 'name') {
    if (!/^[\\sa-zA-Z]{8,30}$/.test((name || '').trim())) {
        errors[fieldName] = 'Name must be 8 or more letters or spaces.';
    }
}