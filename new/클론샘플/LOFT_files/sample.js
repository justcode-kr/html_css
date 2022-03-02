(function(){
    // UI 테스트
    $('.dropdown').on('click', function(){
        $('.globalSelect .alert').addClass('disabled');
        $(this).off('click');
    });
    $('.dropdown .button,.dropdown .option').on('click', function(){
        $(this).parents('.dropdown').toggleClass('show');
    });

    // UI 테스트
    $('.deviceFrame').on('click', function(e) {
        var $target = $(e.target);
        var $contentArea = $('.sampleArea .content');
        var types = '';
        var keyword = 'btnFrame';
        var className = $target.attr('class').split(' ');

        for (var i = 0; i < className.length; i++) {
            if (className[i].indexOf(keyword) !== -1) types = className[i].replace(keyword, '');
        }

        $target.addClass('active').siblings().removeClass('active');

        switch(types) {
            case 'Desktop':
                $contentArea.addClass('viewDesktop').removeClass('viewMobile');
                break;
            case 'Mobile':
                $contentArea.addClass('viewMobile').removeClass('viewDesktop');
                break;
            default :
                return;
        }
    });
})();
