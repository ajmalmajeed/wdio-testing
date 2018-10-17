let PostFeedPage = require('../../page-objects/post-feed.screen');

describe('Post feed', function () {

    it('should allow a user to like/unlike a post', function () {
        PostFeedPage.waitForLikeBtn(PostFeedPage.likeBtn, 10000);
        PostFeedPage.likeUnlikePost();
    });
});