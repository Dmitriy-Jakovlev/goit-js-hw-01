"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let input = prompt('Укажите количество дроидов');

let totalPrice;

if (input === null) {
    alert('Отменено пользователем!');
} else {
    let quantity = Number(input);
    totalPrice = quantity * pricePerDroid;
    if (totalPrice > credits) {
        alert ('Недостаточно средств на счету!');
    }else{
        let result = credits - totalPrice;
        alert(`Вы купили ${quantity} дроидов, на счету осталось ${result} кредитов.`);
    }
}


