let userName;
let userSurname;
let userFavColor;
let pwdNum;
const button = document.getElementById("pwdGenerator");

button.addEventListener("click", function generatePwd (userName, userSurname, userFavColor) {

    userName = prompt("STEP 1: Inserisci il tuo nome")
    userSurname = prompt("STEP 2: Inserisci il tuo cognome")
    userFavColor = prompt("STEP 3: Inserisci il tuo colore preferito")
    pwdNum = Math.floor(Math.random() * 999) + 1;
    
    console.log("La password generata è ", userName + userSurname + userFavColor + pwdNum);
    
    document.getElementById("callToAction").innerHTML = "La tua nuova e sicurissima password è:";

    document.getElementById("pwdField").innerHTML = userName + userSurname + userFavColor + pwdNum;

    button.innerHTML = "Clicca per generare una nuova password";

    });