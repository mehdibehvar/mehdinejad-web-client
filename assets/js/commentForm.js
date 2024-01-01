import $ from 'jquery'
$(function name(params) {
    let commentForm = $('.comment-form')
    let answerTo=$('.answer-to');
    let commentFormTitle = $('.comment-form .form-title')
    let resetBtn= $('.reset-form-btn');
    $(document).on('click', '.btn-form-toggle', function () {
        $(this).toggleClass('outlined')
        $(this).find('.first-text').toggleClass('d-none')
        $(this).find('.second-text').toggleClass('d-none')
        $('.comment-form').toggleClass('close');
        commentFormTitle.text('')
        resetBtn.addClass('d-none')
        answerTo.addClass('d-none')
        commentForm[0].reset()
    });
    $(document).on('click', '.btn-reply-comment', function () {
        let parentId = $(this).data('parent-id')
        let authorName = $(this).data('author-name')
        let btnFormToggle = $('.btn-form-toggle')
        answerTo.removeClass('d-none')
        commentForm.removeClass('close')
        commentFormTitle.text('در پاسخ به دیدگاه ' + authorName)
        resetBtn.removeClass('d-none')
        commentForm.find('.parent_id').remove()
        commentForm.append("<input class='parent_id' type='hidden' name='parent_id' value='" + parentId + "'>")
        btnFormToggle.addClass('outlined')
        btnFormToggle.find('.first-text').addClass('d-none')
        btnFormToggle.find('.second-text').removeClass('d-none');
        $(".comment-form").get(0).scrollIntoView({behavior: 'smooth'});
    });
    resetBtn.on('click',function () {
        commentFormTitle.text('')
        answerTo.addClass('d-none')
        commentForm.find('.parent_id').remove()
        $(this).toggleClass('d-none')

    })
})
      