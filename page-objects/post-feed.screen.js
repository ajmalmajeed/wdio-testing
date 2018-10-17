
let elements = {
    likeBtn: '#txt_fv_count_post',
    commentBtn: '#txt_comment_count_post'
};

let PostFeedPage = Object.create({

   get likeBtn() { return $(elements.likeBtn) },

   get commentBtn() { return $(elements.commentBtn) },

    waitForLikeBtn() {
       browser.waitForVisible('#txt_fv_count_post', 25000);
    },

   likeUnlikePost() {
       this.likeBtn.click();
       },

   wait(milliSeconds) {
     browser.pause(milliSeconds);
   }
});

module.exports = PostFeedPage;