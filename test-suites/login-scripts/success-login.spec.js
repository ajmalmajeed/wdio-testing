
let LoginPage = require('../../page-objects/login.screen');
let PostFeedPage = require('../../page-objects/post-feed.screen');

describe('Success Login', function () {
    // let client;
    // let sessionId = '870a6a39-2a5d-4c51-948c-22086e0430bd';
    //
    // before( function () {
    //     client = webdriverio.remote(sessionId);
    //     // return client.init();
    // });

    it('should successfully login a user', function () {
        LoginPage.enterSuccessEmail();
        LoginPage.enterSuccessPassword();
        LoginPage.clickSignIn();

    });
});