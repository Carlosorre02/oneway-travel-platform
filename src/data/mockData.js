export const author = {
  name: 'MarcoRossi',
  badge: 'Esploratore',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  routes: 12,
  followers: 8230,
  rating: 4.9,
  reviews: 128,
  quote: 'Inizia presto per goderti il Colosseo con meno fila. Il tramonto dal Giardino degli Aranci è imperdibile.'
};

export const itinerary = {
  city: 'Roma',
  country: 'Italia',
  flag: '🇮🇹',
  subtitle: 'Itinerario storico e gastronomico – 1 giorno',
  distance: '8,5 km',
  duration: '6-8 ore',
  stopsCount: 8,
  elevation: '+120 m',
  difficulty: 'Facile',
  avgRating: 4.9,
  reviewCount: 128
};

export const stops = [
  {
    id: 1,
    name: 'Basilica di San Pietro',
    time: '08:30 - 10:00',
    category: 'Museo / Chiesa',
    description: 'Partenza iconica con visita alla basilica e alla piazza. Arriva presto per evitare le code.',
    lat: 41.9022,
    lng: 12.4539,
    rating: 4.9,
    price: 'Ingresso gratuito',
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    name: "Castel Sant'Angelo",
    time: '10:15 - 11:00',
    category: 'Museo',
    description: 'Tappa panoramica sul Tevere con terrazza e vista sulla città storica.',
    lat: 41.9031,
    lng: 12.4663,
    rating: 4.6,
    price: '€16 circa',
    image: 'https://images.unsplash.com/photo-1602611307041-085a00542ecf?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    name: 'Piazza Navona',
    time: '11:15 - 12:00',
    category: 'Punto di interesse',
    description: 'Una delle piazze più scenografiche di Roma, perfetta per una pausa e qualche foto.',
    lat: 41.8992,
    lng: 12.4731,
    rating: 4.8,
    price: 'Gratis',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Pantheon',
    time: '12:15 - 13:00',
    category: 'Museo',
    description: 'Capolavoro dell’architettura romana, con cupola monumentale e atmosfera unica.',
    lat: 41.8986,
    lng: 12.4769,
    rating: 4.8,
    price: '€5 circa',
    image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    name: 'Colosseo',
    time: '15:00 - 16:30',
    category: 'Attrazione principale',
    description: 'Il simbolo di Roma. Prenota il biglietto online per saltare parte della fila.',
    lat: 41.8902,
    lng: 12.4922,
    rating: 4.8,
    price: 'Biglietto online consigliato',
    image: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    name: 'Foro Romano',
    time: '16:45 - 17:30',
    category: 'Sito archeologico',
    description: 'Passeggiata tra rovine, archi e resti della vita pubblica dell’antica Roma.',
    lat: 41.8925,
    lng: 12.4853,
    rating: 4.7,
    price: 'Incluso in molti ticket Colosseo',
    image: 'https://images.unsplash.com/photo-1566932545688-71c9f18f83ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 7,
    name: 'Trastevere',
    time: '19:30 - 21:00',
    category: 'Cena',
    description: 'Quartiere perfetto per chiudere la giornata con cucina romana e atmosfera serale.',
    lat: 41.8890,
    lng: 12.4697,
    rating: 4.7,
    price: '€25-40 a persona',
    image: 'https://images.unsplash.com/photo-1552832230-788ca8de5a2e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 8,
    name: 'Giardino degli Aranci',
    time: '21:15 - 21:45',
    category: 'Vista panoramica',
    description: 'Vista romantica e tranquilla sulla città, ideale al tramonto o a fine serata.',
    lat: 41.8858,
    lng: 12.4807,
    rating: 4.8,
    price: 'Gratis',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=900&q=80'
  }
];

export const highlights = [
  {
    name: 'Colosseo',
    category: 'Biglietto online consigliato',
    rating: 4.8,
    reviews: '24.512',
    icon: 'landmark',
    image: 'https://images.unsplash.com/photo-1555992828-ca4dbe41d294?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Ristorante Da Enzo',
    category: 'Trastevere · Cucina Romana',
    rating: 4.7,
    reviews: '1.289',
    icon: 'utensils',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Hotel Artemide',
    category: 'Near Termini · 4★',
    rating: 4.6,
    reviews: '3.112',
    icon: 'bed',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Giardino degli Aranci',
    category: 'Vista panoramica',
    rating: 4.8,
    reviews: '8.402',
    icon: 'camera',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=900&q=80'
  }
];

export const reviews = [
  {
    name: 'Giulia Bianchi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '12 marzo 2026',
    comment: 'Percorso perfetto per vedere Roma in un giorno senza sentirsi persi. Ottimi consigli sui tempi.'
  },
  {
    name: 'Luca Ferri',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '4 marzo 2026',
    comment: 'La parte su Trastevere è stata la migliore. Ho salvato il percorso e lo rifarò con amici.'
  },
  {
    name: 'Sara Conti',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    rating: 4,
    date: '21 febbraio 2026',
    comment: 'Molto bello, ma consiglio scarpe comode: la giornata è intensa. Mappa chiarissima.'
  },
  {
    name: 'Andrea Moretti',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: '15 febbraio 2026',
    comment: 'Mi è piaciuto il mix tra monumenti, cibo e punti panoramici. Sembra una guida locale.'
  }
];

export const weather = {
  temp: '22°C',
  condition: 'Soleggiato',
  humidity: '45%',
  wind: '11 km/h'
};
