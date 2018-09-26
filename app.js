console.log('hello world');

var $menu = document.querySelector('.menu_chat');
var $icon = document.querySelector('.icon')

$menu.addEventListener('click', function () {
   $icon.classList.toggle('menu');
   $icon.classList.toggle('close');
});