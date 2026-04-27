function creaAnagrafica() {
    const nome = inputNome.value;
    const cognome = inputCognome.value;
    const dataNascita = inputDataNascita.value;
    const indirizzo = inputIndirizzo.value;
    const citta = inputCitta.value;
    const cap = inputCAP.value;
    const username = inputUsername.value;
    const email = inputEmail.value;

    const patternNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const patternCAP = /^[0-9]+$/;
    const patternUsername = /^[A-Za-z0-9!@#$%^&*()_+=\-]{3,16}$/;
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nomeValido = patternNome.test(nome);
    const cognomeValido = patternNome.test(cognome);
    const capValido = patternCAP.test(cap);
    const usernameValido = patternUsername.test(username);
    const emailValida = patternEmail.test(email);


    const data = new Date(dataNascita);
    let generazione = "Generazione sconosciuta";

    for (const nomeGenerazione in generazioniSociali) {
        const { start, end } = generazioniSociali[nomeGenerazione];
        if (data.getFullYear() >= start && data.getFullYear() <= end) {
            generazione = nomeGenerazione;
            break;
        }
    }

    outputNome.textContent = `Nome: ${nome}`;
    outputCognome.textContent = `Cognome: ${cognome}`;
    outputIndirizzo.textContent = `Indirizzo: ${indirizzo}`;
    outputCitta.textContent = `Città: ${citta}`;
    outputCAP.textContent = `CAP: ${cap}`;
    outputDataNascita.textContent = `Data di Nascita: ${data.toLocaleDateString()} (${generazione})`;

    return true;
}
