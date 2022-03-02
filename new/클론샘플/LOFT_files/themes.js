var PREVIEW_THEMES = (function () {
    'use strict';

    return {
        init: function () {
        },
        changeLanguage: function (e) {
            e.preventDefault();
            var sOptionClass = $(this).find('a').attr('class');
            $('#js-iframe-preview-pc').attr('src', $('.js-option-pc .' + sOptionClass).attr('href'));
            $('#js-iframe-preview-mobile').attr('src', $('.js-option-mobile .' + sOptionClass).attr('href'));
        }
    }
})();

$(function () {
    PREVIEW_THEMES.init();

    $("#js-pc-href").click(function (e) {
        e.preventDefault();
        $("#js-iframe-preview-pc").removeAttr('style');
        $("#js-iframe-preview-mobile").hide();
        $(".js-option-pc").show();
        $(".js-option-mobile").hide();
    });

    $("#js-mobile-href").click(function (e) {
        e.preventDefault();
        $("#js-iframe-preview-mobile").removeAttr('style');
        $("#js-iframe-preview-pc").hide();
        $(".js-option-pc").hide();
        $(".js-option-mobile").show();
    });

    $(".js-change-language").click(PREVIEW_THEMES.changeLanguage);
});