let userName;
let userSurname;
let userFavColor;
let userDate;
let pwdNum;
const button = document.getElementById("pwdGenerator");

button.addEventListener("click", function generatePwd (userName, userSurname, userFavColor) {

    userName = prompt("STEP 1: Inserisci il tuo nome");
    userSurname = prompt("STEP 2: Inserisci il tuo cognome");
    userFavColor = prompt("STEP 3: Inserisci il tuo colore preferito");
    
    // con l'operatore || parseInt() da il numero intero più vicino oppure un numero casuale tra 0 e 99
    userDate = parseInt(prompt("STEP 4: Inserisci le ultime due cifre del tuo anno di nascita")) || Math.floor(Math.random() * 99) + 1;
    pwdNum = Math.floor(Math.random() * 999) + 1;
    
    console.log("La password generata è: ", userName + userSurname + userFavColor + (Number(pwdNum) + Number(userDate)));
    
    document.getElementById("callToAction").innerHTML = "La tua nuova e sicurissima password è:";

    document.getElementById("pwdField").innerHTML = userName + userSurname + userFavColor + (Number(pwdNum) + Number(userDate));     

/*     
con il seguente metodo pwdNum e userDate vengono trattati come stringhe e quindi concatenati e non sommati.
    document.getElementById("pwdField").innerHTML = userName + userSurname + userFavColor + pwdNum + userDate;
*/

    button.innerHTML = "Clicca per generare una nuova password";

    });