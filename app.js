//----------------------- Chat menu -------------------------

var $menu = document.querySelector('.menu_chat');
var $icon = document.querySelector('.icon');
var $menu_popup = document.querySelector('.menu_tab');

$menu.addEventListener('click', function () {
   $icon.classList.toggle('menu');
   $icon.classList.toggle('close');
   $menu_popup.classList.toggle('hidden');
});

//--------------------- Smiley popup ------------------------

var $smile_menu = document.querySelector('.smile_menu_button');
var $smile_popup = document.querySelector('.smile_popup');
var $arrow_down = document.querySelector('.arrow_down');
var smiley_open =  false;

$smile_menu.addEventListener('click', function () {
   $smile_popup.classList.toggle('hidden');
   $arrow_down.classList.toggle('hidden');
   smiley_open = !smiley_open;
});

// Hide popup when outside click
document.addEventListener("click", function(event) {
    if (smiley_open) {
        if (event.target.closest(".smile_popup"));

        else if (event.target.closest(".smile_menu_button"));

        else {
            $smile_popup.classList.add('hidden');
            $arrow_down.classList.add('hidden');
            smiley_open = !smiley_open;  
        }
    }
});

//----------------- Add smiley to textarea ------------------

var $textarea = document.querySelector('.text_area textarea');

$smile_popup.addEventListener('click', function () {
    let target = event.target;

    if(target.type == 'button') {
        $textarea.value += target.textContent;
    }
});

//--------------- ctr + enter => new line --------------------

$textarea.addEventListener('keydown', function() {
    if( event.ctrlKey && event.keyCode == 13 ) {
        $textarea.value += '\n';
    }
});

//--------------------- Send message -------------------------

var $send = document.querySelector('.send');
var $messages = document.querySelector('.messages');

$textarea.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        if( !event.ctrlKey ) {
            $send.click();
        }
    }
  });

$send.addEventListener('click', function () {

    if ( $textarea.value != '' ) {
        var $new_div = document.createElement('div');
        var output = $textarea.value.replace(/\n/g, "<br />");  

        $messages.appendChild($new_div);
        $new_div.classList.add('txt_send');
        
        $new_div.innerHTML = output;
        $textarea.value = '';

        var $typing = document.createElement('img');
        $messages.appendChild($typing);
        $typing.classList.add('typing');
        $typing.setAttribute('src','img/typing.gif');


        typing = setTimeout(envoi, 3000);

        function envoi() {

            $messages.removeChild($typing);

            if (output in aswers_log) {
                var $new_answer = document.createElement('div');
                var $new_answer_profile = document.createElement('div');
                var $new_answer_txt = document.createElement('div');

                $messages.appendChild($new_answer);
                $new_answer.classList.add('message_bot');
                $new_answer.appendChild($new_answer_profile);
                $new_answer_profile.classList.add('profil_bot');
                $new_answer.appendChild($new_answer_txt);
                $new_answer_txt.classList.add('txt_bot');

                $new_answer_profile.innerHTML = '<img class="photo_bot" src="img/VAUTRIN-Amandine-2.jpg" alt="Photo de profil du bot">';
                $new_answer_txt.textContent = aswers_log[output];
            }
        
            else {
                var $new_answer = document.createElement('div');
                var $new_answer_profile = document.createElement('div');
                var $new_answer_txt = document.createElement('div');

                $messages.appendChild($new_answer);
                $new_answer.classList.add('message_bot');
                $new_answer.appendChild($new_answer_profile);
                $new_answer_profile.classList.add('profil_bot');
                $new_answer.appendChild($new_answer_txt);
                $new_answer_txt.classList.add('txt_bot');

                $new_answer_profile.innerHTML = '<img class="photo_bot" src="img/VAUTRIN-Amandine-2.jpg" alt="Photo de profil du bot">';
                $new_answer_txt.innerHTML = 'Désolé,<br>mon code binaire ne te comprends pas 😢';
            }
        }

        $messages.scrollTop = $messages.scrollHeight;
    }
});

//-------------------- Link aswer sheet -------------------

var imported = document.createElement('script');
imported.src = 'answers.js';
document.head.appendChild(imported);