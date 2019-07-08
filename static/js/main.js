$(function() {
    //menu
    var menu=$('#nav'),
        burgerMenu = $('#burgerMenu'),
        menuArrowBtn=$('#nav .menu__arrow');

    menuArrowBtn.on('click',function(e){
        e.preventDefault();
        $(this).parent('.menu__links').parent('.menu_hasChild').find('.subMenu').slideToggle();
    });
    burgerMenu.on('click',function(e){
        e.preventDefault();
        menu.slideToggle();
        burgerMenu.toggleClass('menu__burger_active');
    })
    //form
    $('#form_tel').mask("+38(99) 999-99-99");
});