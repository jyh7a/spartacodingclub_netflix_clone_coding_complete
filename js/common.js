$('.email-input').on('focusout keyup', function () {
    const email = $(this).val();
    const emailLength = email.length;
    const $inputError = $(this).closest('.input-placement').siblings('.inputError').show();
    if (emailLength >= 5) {
        $(this).addClass('hasText');
        emailRegeX($(this), email, $inputError);
    } else if (emailLength >= 1) {
        $(this).addClass('hasText');
        $(this).addClass('error');
        if (langData == 'ko') {
            $inputError.text('이메일 주소를 입력해 주세요.')
        } else {
            $inputError.text('Email is required!')
        }
        $inputError.show();
    } else {
        $(this).addClass('error');
      if (langData == 'ko') {
            $inputError.text('이메일 주소를 입력해 주세요.')
        } else {
            $inputError.text('Email is required!')
        }
        $(this).removeClass('hasText');
    }
})
var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const emailRegeX = function ($self, email, $inputError) {
    if (!emailRule.test(email)) {
        $self.addClass('error');
        if (langData == 'ko') {
            $inputError.text('정확한 이메일 주소를 입력하세요.')
        } else {
            $inputError.text('Please enter a valid email address')
        }
        $inputError.show();
    } else {
        $inputError.hide();
        $self.removeClass('error');
    }
}

$('.faq-question').on('click', function () {
    const $li = $(this).closest('li');
    const $allLi = $('.faq-list-item');
    const $answer = $(this).siblings('div');
    const $allAnswer = $('.faq-answer');
    const isOpen = $li.hasClass('open');

    if (isOpen) {
        $allLi.removeClass('open');
        $answer.removeClass('open');
        $answer.addClass('closed');
    } else {
        $allLi.removeClass('open');
        $li.addClass('open');
        $allAnswer.addClass('closed');
        $answer.removeClass('closed');
        $answer.addClass('open');
    }

})

$('.setCookiePopup').on('click', function () {
    $('.setCookiePopupLayer').fadeIn();
    $('body').css('overflow', 'hidden');
})

$('.setCookiePopupLayer img').on('click', function () {
    $('.setCookiePopupLayer').fadeOut();
    $('body').css('overflow', 'auto')
})