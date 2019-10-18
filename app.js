'use strict';

/*let age = prompt('Какое официальное название JavaScript?', '');

age == 'ECMAScript' ? alert('Правильно' ) : alert('You don"t know ECMAScrip');*/

let userName = prompt('Введите логин', '');

if (userName == 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password == 'Я главный') {
        alert('Здравствуйте!')
    } else if (password == null || password == '') {
        alert('Отменено!')
    } else {
        alert('Неверный пароль!')
    }
} else if (userName == null || userName == '') {
    alert('Отменено')
} else {
    alert('I don"t know you')
}


