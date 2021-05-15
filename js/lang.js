let langData = 'ko';

$('.lang-selector').on('change', function () {
    let region = $(this).val();

    if (region == 'ko') {
        location.reload();
    } else if (region == 'en') {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/spartacodingclub_netflix_clone_coding_complete/assets/lang/en.json',
            success: function (data) {
                langData = data;
                changeLanguage(langData);
                langSelectorSync(region);
                changeHtmlLang(region);

                // for disclaimer
                $('.disclaimer').fadeIn();
            }
        })
    }
})
const changeLanguage = function (langData) {

    $('.lang').each(function (index, item) {
        const key = $(item).text().trim();

        for (const property in langData) {
            if (langData[key]) {
                $(item).html(langData[key]);
            }
        }
    })

}
const langSelectorSync = (region) => {
    if (region == 'ko') {
        $('.lang-selector').val("ko").prop("selected", true);
    } else if (region == 'en') {
        $('.lang-selector').val("en").prop("selected", true);
    }
}
const changeHtmlLang = function (region) {
    if (region == 'ko') {
        $("html").attr("lang", "ko")
    } else {
        $("html").attr("lang", "en")
    }
}

// Change language according to lang attribute
$(function () {
    let region = $('.lang-selector').val();
    if (region == 'ko') {
    } else if (region == 'en') {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/spartacodingclub_netflix_clone_coding_complete/assets/lang/en.json',
            success: function (data) {
                langData = data;
                changeLanguage(langData);
                langSelectorSync(region);
                changeHtmlLang(region);
            }
        })
    }
});