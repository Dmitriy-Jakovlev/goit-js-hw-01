"use strict";

let deliveryCountry = prompt('Укажите страну доставки');

if (deliveryCountry!==null) {
    deliveryCountry = deliveryCountry.toLowerCase();
}

let cost;

switch (deliveryCountry) {
    case "китай":
        cost = 100;
        break;
    case "чили":
        cost = 250;
        break;
    case "австралия":
        cost = 170;
        break;
    case "индия":
        cost = 80;
        break;
    case "ямайка":
        cost = 120;
        break;
    default:
        cost = -1;
}

if (cost !== -1) {
    deliveryCountry = deliveryCountry.charAt(0).toUpperCase() + deliveryCountry.slice(1);
    alert(`Доставка в ${deliveryCountry} будет стоить ${cost} кредитов`);
} else {
    alert("В вашей стране доставка не доступна");
}