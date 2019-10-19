'use strict';

/*let age = prompt('Какое официальное название JavaScript?', '');

age == 'ECMAScript' ? alert('Правильно' ) : alert('You don"t know ECMAScrip');*/

/*let userName = prompt('Введите логин', '');

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
}*/

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
    console.log("Внешний цикл: " + x);
    x += 1;
    z = 1;
    while (true) {
        console.log("Внутренний цикл: " + z);
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelLoops;
        } else if (z === 10) {
            break;
        }
    }
}


