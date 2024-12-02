# UI Roptin - Clone di Airbnb

## 📝 Descrizione
UI Roptin è un clone di Airbnb sviluppato con React e TypeScript. Il progetto implementa le principali funzionalità della piattaforma di prenotazione alloggi, con particolare attenzione all'interfaccia utente e all'esperienza di navigazione.

## 🛠 Tecnologie Utilizzate

### Core
- React
- TypeScript
- Tailwind CSS
- React Router DOM (v6)

### UI Components
- Radix UI
- Lucide React (per le icone)
- DaisyUI
- Tailwind Merge

## 🏗 Struttura del Progetto

### Componenti Principali
- `LandingPage`: Pagina iniziale con login/registrazione
- `HomePage`: Dashboard principale con ricerca alloggi
- `HotelInfo`: Dettaglio singolo alloggio

### Componenti Comuni
- `Button`: Componente riutilizzabile per i pulsanti
- `Input`: Campo di input personalizzato
- `Dialog`: Modale per login/registrazione
- `Img`: Componente per la gestione delle immagini
- `LinkText`: Componente per i link

### Componenti Plus
- `Navbar`: Barra di navigazione responsive
- `Footer`: Piè di pagina
- `CardHotel`: Card per la visualizzazione degli alloggi
- `ThreeSearchHotel`: Barra di ricerca principale
- `CardPrenotationHotel`: Form di prenotazione

## 🔐 Autenticazione
Il sistema utilizza localStorage per la gestione dell'autenticazione:
- Salvataggio dati utente dopo il login
- Protected Routes per pagine riservate agli utenti autenticati
- Gestione logout

## 📱 Responsive Design
- Layout fluido con Tailwind CSS
- Menu hamburger per dispositivi mobili
- Grid system adattivo per le card degli alloggi
- Breakpoints personalizzati per diverse dimensioni di schermo

## 🎨 UI/UX Features
- Calendario interattivo per selezione date
- Modal per login/registrazione
- Animazioni e transizioni fluide
- Immagini casuali per gli alloggi

## 💾 Gestione Dati
- Mock data per gli alloggi
- Interfacce TypeScript per type safety
- Array di immagini per simulare database
- Gestione stato con React hooks

## 🎯 Funzionalità Principali
1. **Sistema di Autenticazione**
   - Login/Registrazione
   - Protezione route
   - Gestione sessione utente

2. **Ricerca Alloggi**
   - Filtro per date
   - Selezione numero ospiti
   - Ricerca per località

3. **Visualizzazione Alloggi**
   - Grid responsive
   - Sistema di preferiti
   - Dettaglio singolo alloggio

4. **Prenotazione**
   - Selezione date con calendario
   - Calcolo prezzi
   - Form di prenotazione

## 🚀 Come Iniziare
1. Clona il repository
2. Installa le dipendenze: `npm install`
3. Avvia il server di sviluppo: `npm run dev`

## 🎨 Stili
Il progetto utilizza un mix di:
- Tailwind CSS per stili base
- DaisyUI per componenti predefiniti
- CSS custom per personalizzazioni specifiche
- Classi utility per responsive design

## 🔜 Sviluppi Futuri
- Implementazione gestione alloggi con DB
- Sistema di recensioni
- Filtri di ricerca avanzati
- Gestione pagamenti
- Chat host-ospite


