import { Sun, Droplets, Wind } from 'lucide-react';

export default function WeatherCard({ weather }) {
  return (
    <section className="glass-card weather-card">
      <div>
        <p className="eyebrow">Meteo</p>
        <h2>{weather.temp}</h2>
        <p>{weather.condition}</p>
      </div>
      <Sun className="sun-icon" size={62} />
      <div className="weather-meta">
        <span><Droplets size={16} /> Umidità {weather.humidity}</span>
        <span><Wind size={16} /> Vento {weather.wind}</span>
      </div>
    </section>
  );
}
