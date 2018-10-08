console.log('hello world');

//----------------------- Chat menu -------------------------

var $menu = document.querySelector('.menu_chat');
var $icon = document.querySelector('.icon');

$menu.addEventListener('click', function () {
   $icon.classList.toggle('menu');
   $icon.classList.toggle('close');
});

//--------------------- Smiley popup ------------------------

//var body = document.querySelector('wrapper');
var $smile_menu = document.querySelector('.smile_menu_button');
var $smile_popup = document.querySelector('.smile_popup');
var $arrow_down = document.querySelector('.arrow_down');

$smile_menu.addEventListener('click', function () {
   $smile_popup.classList.toggle('hidden');
   $arrow_down.classList.toggle('hidden');
});

/*body.addEventListener('click', function () {
    if ( $smile_popup.className != 'hidden' ) {
        console.log('ça marche :)');
    };
});*/

//----------------- Add smiley to textarea ------------------

var $textarea = document.querySelector('.text_area textarea');

$smile_popup.addEventListener('click', function () {
    let target = event.target;

    if(target.type == 'button') {
        $textarea.value += target.textContent;
    };
});

//--------------- ctr + enter => new line --------------------

$textarea.addEventListener('keydown', function() {
    if( event.ctrlKey && event.keyCode == 13 ) {
        $textarea.value += '\n';
    };
});

//--------------------- Send message -------------------------

var $send = document.querySelector('.send');
var $messages = document.querySelector('.messages');

$textarea.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        if( !event.ctrlKey ) {
            $send.click();
        };
    };
  });

$send.addEventListener('click', function () {

    if ( $textarea.value != '' ) {
        var $newDiv = document.createElement('div');
        var output = $textarea.value.replace(/\n/g, "<br />");  

        $messages.appendChild($newDiv);
        $newDiv.classList.add('txt_send');
        
        $newDiv.innerHTML = output;
        $textarea.value = '';
    };
});
