import { Clock3, Star } from 'lucide-react';

export default function StopTimeline({ stops }) {
  return (
    <aside className="section-card stop-panel">
      <div className="section-heading slim">
        <div>
          <p className="eyebrow">Roadbook</p>
          <h2>8 tappe dell’itinerario</h2>
        </div>
      </div>
      <div className="timeline">
        {stops.map((stop) => (
          <article className="stop-row" key={stop.id}>
            <div className="stop-index">{stop.id}</div>
            <img src={stop.image} alt={stop.name} />
            <div>
              <h3>{stop.name}</h3>
              <p>{stop.category}</p>
              <div className="stop-meta">
                <span><Clock3 size={13} /> {stop.time}</span>
                <span><Star size={13} fill="currentColor" /> {stop.rating}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
