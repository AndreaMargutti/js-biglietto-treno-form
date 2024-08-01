/* Scaletta
1. Recuperare gli elemti dalla pagina HTML
2. Recuperare il valore di nome, kms ed età
3. Calcolare prezzo base del biglietto
4. Calcolare gli sconti
5. Applicare gli sconti
6. Stampare i risultati
*/

// # Fase di preparazione
// Recupero gli elementi HTML
const nameField = document.getElementById('fullname');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const button = document.getElementById('give-btn');

// # Fase di elaborazione dati
//Recupero i valori degli input
button.addEventListener('click', function(e){
    e.preventDefault();
    
    //Recupero Nome e Cognome Utente
    const nameValue = nameField.value;
    console.log('name: ', nameValue);
    //Recupero i valori
    const kmsValue = parseInt(kmsField.value);
    console.log('kms: ', kmsValue);
    const ageValue = parseInt(ageField.value);
    console.log('age: ', ageValue);
    
    // ! Validtation
    if((!nameValue) || isNaN(kmsValue) || isNaN(ageValue)) {
        alert('Dati non Validi');
    } else {
        //Calcolo prezzo base del biglietto
        const basePrice = kmsValue * 0.21;
        console.log('base-price: ',basePrice);
        let finalPrice = basePrice;
        console.log('final-price: ', finalPrice);
    
        //Creo gli sconti:
        let discount = false;
        if(ageValue < 18) discount = parseInt(20);
        else if(ageValue >= 65) discount = parseInt(40);
        console.log('discount: ', discount);
    
        //Calcolo prezzo scontato
        if(discount){
            finalPrice -= finalPrice * discount / 100;
            console.log('final-price: ', finalPrice);
        }
    
        // # Stampiano in pagina
        //Recupero elementi
        let nameP = document.getElementById('ticket-name');
        let priceP = document.getElementById('ticket-price');
    
        //Stampo i valori
        nameP.innerHTML += ` <strong>${nameValue}</strong>`;
        priceP.innerHTML += ` <strong>${finalPrice}</strong>`
    }
})

// # Fase di output

