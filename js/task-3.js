'use script';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');
console.log(message);
if (message === null) {
    alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {   
    alert('Добро пожаловать!');
} else {
    alert('Доступ запрещен, неверный пароль!');
}
