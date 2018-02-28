$(document).ready(
    function() {
    $('.time a').click(function() { //ловим клик по ссылке c классом goto
    var scroll = $(this).attr('href'); //берем атрибут href выбранного элемента
        $('.active').removeClass('active');
        $('.preactive1').removeClass('preactive1');
        $('.preactive2').removeClass('preactive2');
        $('.preactive3').removeClass('preactive3');
        $(this).addClass('active');
        $(this).next().addClass('preactive1').next().addClass('preactive2').next().addClass('preactive3');
        $(this).prev().addClass('preactive1').prev().addClass('preactive2').prev().addClass('preactive3');
    $('html, body').animate({scrollTop: $(scroll).offset().top }, 800); //анимируем скроллинг к элементу
    return false; //выключаем стандартное действие
    });
});
