
let testData = require('../test-data/login');

let pageElements = {
    email: '#editText_username_sign_in',
    password: '#editText_password_sign_in',
    loginBtn: '#btn_sign_in'
};

let LoginPage = Object.create({

    get email() { return $(pageElements.email); },

    get password() { return $(pageElements.password); },

    get signInBtn() { return $(pageElements.loginBtn); },

    wait(milliSeconds) {
        browser.pause(milliSeconds)
    },

    enterSuccessEmail() {
        this.email.setValue(testData.successEmail);
    },

    enterSuccessPassword() {
        this.password.setValue(testData.successPassword);
    },

    clickSignIn() {
        this.signInBtn.click();
    },

});

module.exports = LoginPage;