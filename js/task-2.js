'use script';

const total = 100;
const ordered = 50;
let result;

if (total < ordered) {
    result = 'На складе недостаточно товаров!';
} else {
    result = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(result);