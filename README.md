# PrenotazioniPalestra

## Strumenti utilizzati

nodejs, Angular, json-server, bootstrap

## Componenti

### Navbar

Barra di navigazione che consente di sposarsi tra le varie pagine del sito

### Home

Pagina principale del sito vengono mostrati i primi 4 corsi presenti nel db

### Chi Siamo

Semplice esempio di pagina "chi siamo".

### Corsi

Pagina che mostra tutti i corsi presenti nel db sottoforma di card (realizzate in css)

### Corso

Component che definisce il tipo "Corso" e che rappresenta la logica e la UI dei singoli corsi

### Corsi-prenotati

Component simile a Corso che però rapprenseta la logica e la Ui dei Corsi che l'utente prenota

### Amministrazione

Pagina che mostra le prenotazioni effetuate dall'utente

## Routing

Tramite il routing Outlet è possibile il rendering delle componenti associate a una determinata rotta definite nell'app-routes.ts

## Services

E' presente un solo service chiamato "corsi.services.ts" che consente la connessione al db e di utilizzare i metodi dell'httpClient

## Implentazioni

- Creazione di tutte le pagine richieste
- Uso delle classi di Bootstrap per una migliore UI
- Routing perfettamente funzionante
- Nella pagina "corsi" e "home" sono visibili i corsi dal db
- E' possbile aggiornare il db, aggiungendo e togliendo la prenotazione a un corso

## Mancanze

- Presenza dei form e della validazione dei dati
