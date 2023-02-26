let country = prompt("u country?").toLowerCase();

const china = "Доставка буде коштувати 100 кредитів";
const chile = "Доставка буде коштувати 250 кредитів";
const australia = "Доставка буде коштувати 170 кредитів";
const india = "Доставка буде коштувати 80 кредитів";
const jamiaca = "Доставка буде коштувати 120 кредитів";
const ukraine = "Для тебе безкоштовно друже";
const russia = "Здохни орк";

switch (country) {
  case "china":
    cost = alert(china);
    break;

  case "chile":
    cost = alert(chile);
    break;

  case "australia":
    cost = alert(australia);
    break;

  case "india":
    cost = alert(india);
    break;

  case "jamiaca":
    cost = alert(jamiaca);
    break;

  case "ukraine":
    cost = alert(ukraine);
    break;

  case "russia":
    cost = alert(russia);
    break;

  default:
    alert("Invalid country, only (China, Chile, Australia, India and Jamiaca)");
}

console.log(cost);
