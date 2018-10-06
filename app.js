console.log('hello world');

//----------------------- Chat menu -------------------------

var $menu = document.querySelector('.menu_chat');
var $icon = document.querySelector('.icon');

$menu.addEventListener('click', function () {
   $icon.classList.toggle('menu');
   $icon.classList.toggle('close');
});

//--------------------- Smiley popup ------------------------

var $smile_menu = document.querySelector('.smile_menu_button');
var $smile_popup = document.querySelector('.smile_popup');
var $arrow_down = document.querySelector('.arrow_down');

$smile_menu.addEventListener('click', function () {
   $smile_popup.classList.toggle('hidden');
   $arrow_down.classList.toggle('hidden');
   $smile_popup.classList.toggle('');
   $arrow_down.classList.toggle('');
});

//----------------- Add smiley to textarea ------------------

var $textarea = document.querySelector('.text_area textarea');
var $smiley_1 = document.querySelector('#smiley_1');

$smiley_1.addEventListener('click', function () {
    $textarea.value += '😊';
});

var $textarea = document.querySelector('.text_area textarea');
var $smiley_2 = document.querySelector('#smiley_2');

$smiley_2.addEventListener('click', function () {
    $textarea.value += '🤣';
});

//--------------------- Send message -------------------------

var $send = document.querySelector('.send');
var $messages = document.querySelector('.messages');

$send.addEventListener('click', function () {
    var $newDiv = document.createElement('div');

    $messages.appendChild($newDiv);
    $newDiv.classList.add('txt_send');

    $newDiv.innerHTML = $textarea.value;
    $textarea.value = '';

});
