let userName
let userSurname
let userFavColor
const button = document.getElementById("pwdGenerator")

function generatePwd (userName, userSurname, userFavColor) {

userName = prompt("STEP 1: Inserisci il tuo nome")
userSurname = prompt("STEP 2: Inserisci il tuo cognome")
userFavColor = prompt("STEP 3: Inserisci il tuo colore preferito")    

document.getElementById("callToAction").innerHTML = "La tua nuova e sicurissima password è:";
document.getElementById("pwdField").innerHTML = userName + userSurname + userFavColor + 23;
}

generatePwd (userName, userSurname, userFavColor);