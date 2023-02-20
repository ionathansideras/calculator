document.addEventListener('DOMContentLoaded', function(){
    
    let count = '';
    let buttons = document.querySelectorAll('#num');
    
    for( let i = 0; i < buttons.length; i++){
        buttons[i].onclick = function() {
            let number = buttons[i].innerHTML;
            count += number;
            document.querySelector('h1').innerHTML = count;
        };
    };

    document.querySelector('.clear').onclick = function(){
        count = '';
        document.querySelector('h1').innerHTML = '0';
    };

    document.querySelector('.results').onclick = function(){
        document.querySelector('h1').innerHTML = eval(count);
        count = eval(count);
    };
    
    
});
