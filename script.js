// Creazione array cognomi
var lista_cognomi=["Chiellini","Bonucci","Rugani","Bernardeschi","Zaniolo","Chiesa","Petagna","Gravina"];

// Inserimento cognome utente tramite prompt e push nell'array
var cognomeutente=prompt("Inserisci il tuo cognome!");
lista_cognomi.push(cognomeutente);

// Stampa lista ordinata alfabeticamente
document.getElementById("lista").innerHTML=lista_cognomi.sort();

// Stampa posizione cognome utente
var i=0;
while (i<lista_cognomi.length) {
  if (lista_cognomi[i]==cognomeutente) {
    document.getElementById("posizione").innerHTML=i;
  }
  i++;
}
// for (var i = 0; i < lista_cognomi.length; i++) {
//   if (lista_cognomi[i]==cognomeutente) {
//     console.log(i);
//   }
// }
