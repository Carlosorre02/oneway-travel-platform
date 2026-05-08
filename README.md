# OneWay — Travel Itinerary Platform

Sito web moderno, responsive e professionale per una piattaforma travel-tech ispirata a Strava, Google Maps e TripAdvisor, dedicata alla creazione e condivisione di itinerari turistici.

## Stack

- React + Vite
- Leaflet + React Leaflet per la mappa interattiva
- Lucide React per le icone
- CSS custom in dark mode
- Dati mock separati in `src/data/mockData.js`

## Struttura dei file

```txt
oneway-travel-platform/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── data/
    │   └── mockData.js
    └── components/
        ├── AuthorTips.jsx
        ├── Header.jsx
        ├── HighlightCards.jsx
        ├── InteractiveMap.jsx
        ├── ItineraryStats.jsx
        ├── Reviews.jsx
        ├── Sidebar.jsx
        ├── StopTimeline.jsx
        ├── UserProfile.jsx
        └── WeatherCard.jsx
```

## Avvio del progetto

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri nel browser l'indirizzo mostrato da Vite, di solito:

```txt
http://localhost:5173
```

## Build di produzione

```bash
npm run build
npm run preview
```

## Personalizzazione

- Modifica tappe, autore, recensioni e card in `src/data/mockData.js`.
- Modifica colori e layout in `src/styles.css`.
- La mappa usa tile dark di CartoDB/OpenStreetMap e dati mock geolocalizzati su Roma.
- Cliccando sui marker numerati si apre un popup con immagine, orario, categoria, descrizione, rating e prezzo/consiglio.
