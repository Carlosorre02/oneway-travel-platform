import { BedDouble, Camera, Landmark, Star, Utensils } from 'lucide-react';

const iconMap = { landmark: Landmark, utensils: Utensils, bed: BedDouble, camera: Camera };

export default function HighlightCards({ highlights }) {
  return (
    <section className="section-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Suggerimenti</p>
          <h2>Tappe in evidenza</h2>
        </div>
        <a href="#">Vedi tutte</a>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => {
          const Icon = iconMap[item.icon] || Landmark;
          return (
            <article className="highlight-card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="highlight-gradient" />
              <div className="highlight-content">
                <div className="category-icon"><Icon size={18} /></div>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span><Star size={16} fill="currentColor" /> {item.rating} ({item.reviews})</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
