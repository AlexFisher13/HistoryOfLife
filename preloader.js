$('body')[0].onload = function() {
    setTimeout(function () {
        var preloader = $('.preloader')[0];
        if(!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 500)
};