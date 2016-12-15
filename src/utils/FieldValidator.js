class FieldValidator {
    isEmail(email) {
        const regEx = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+' +
                '@' +
                '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:' +
                '\.' +
                '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');

        return regEx.test(email);
    }
}

export default FieldValidator;
