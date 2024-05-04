const userFirstName = prompt("Qual è il tuo nome?");
const userLastName = prompt("Qual è il tuo cognome?");
const userFavColor = prompt("Qual è il tuo colore preferito?");
const num1 = Number(prompt("Ora scrivi un numero"));
const num2 = Number(prompt("Scrivi un altro numero"));
const pwdNum = num1 / num2;

const SuperSecretPWD = userFirstName + userLastName + userFavColor + pwdNum;

console.log(SuperSecretPWD);
