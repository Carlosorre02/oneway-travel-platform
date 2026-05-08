import {
  Bell,
  Settings,
  User,
  Home,
  Compass,
  Map,
  Heart,
  Bookmark,
  Share2,
  Download,
  Navigation,
  Plus,
  Users,
  Star
} from 'lucide-react';
import { author, itinerary, stops, highlights, reviews, weather } from './data/mockData.js';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import UserProfile from './components/UserProfile.jsx';
import ItineraryStats from './components/ItineraryStats.jsx';
import InteractiveMap from './components/InteractiveMap.jsx';
import HighlightCards from './components/HighlightCards.jsx';
import AuthorTips from './components/AuthorTips.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import Reviews from './components/Reviews.jsx';
import StopTimeline from './components/StopTimeline.jsx';

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Esplora', icon: Compass },
  { label: 'I miei percorsi', icon: Map, active: true },
  { label: 'Preferiti', icon: Heart },
  { label: 'Profilo', icon: User }
];

function App() {
  return (
    <div className="app-shell">
      <Sidebar navItems={navItems} />

      <main className="page">
        <Header />

        <section className="hero-grid">
          <div className="hero-main glass-card">
            <div className="hero-topline">
              <UserProfile author={author} />
              <div className="action-cluster" aria-label="Azioni itinerario">
                <button className="icon-action"><Bookmark size={18} />Salva</button>
                <button className="icon-action"><Share2 size={18} />Condividi</button>
                <button className="icon-action"><Download size={18} />Scarica</button>
              </div>
            </div>

            <div className="title-row">
              <div>
                <p className="eyebrow">Destinazione</p>
                <h1>{itinerary.city} <span>{itinerary.flag}</span></h1>
                <p className="subtitle">{itinerary.subtitle}</p>
              </div>
              <button className="primary-button"><Navigation size={18} /> Avvia navigazione</button>
            </div>

            <ItineraryStats itinerary={itinerary} />
            <InteractiveMap stops={stops} />
          </div>

          <aside className="hero-aside">
            <div className="glass-card compact-card author-card">
              <div className="small-title">Community score</div>
              <div className="score-xl"><Star fill="currentColor" /> {itinerary.avgRating}</div>
              <p>{itinerary.reviewCount} recensioni verificate da viaggiatori OneWay.</p>
            </div>
            <div className="glass-card compact-card follow-card">
              <Users />
              <h3>Segui {author.name}</h3>
              <p>Ricevi nuovi itinerari, consigli locali e aggiornamenti sulle tappe.</p>
              <button className="secondary-button"><Plus size={17} /> Segui autore</button>
            </div>
            <WeatherCard weather={weather} />
          </aside>
        </section>

        <section className="content-grid">
          <div className="left-column">
            <HighlightCards highlights={highlights} />
            <div className="info-grid">
              <AuthorTips author={author} />
              <Reviews reviews={reviews} />
            </div>
          </div>
          <StopTimeline stops={stops} />
        </section>
      </main>

      <nav className="bottom-nav" aria-label="Navigazione mobile">
        {navItems.map(({ label, icon: Icon, active }) => (
          <a key={label} className={active ? 'active' : ''} href="#">
            <Icon size={22} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default App;
