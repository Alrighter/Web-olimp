(function (){
    var burgerItem = document.querySelector('.burger_menu');
    var menu = document.querySelector('.menu');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu_active');
    })
    
    
}())