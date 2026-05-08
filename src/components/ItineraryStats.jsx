import { Clock3, Flag, MapPinned, Mountain, Route } from 'lucide-react';

const stats = [
  { key: 'distance', label: 'Distanza', icon: Route, className: 'orange' },
  { key: 'duration', label: 'Durata', icon: Clock3, className: 'blue' },
  { key: 'stopsCount', label: 'Tappe', icon: Flag, className: 'green' },
  { key: 'elevation', label: 'Dislivello', icon: Mountain, className: 'purple' },
  { key: 'difficulty', label: 'Difficoltà', icon: MapPinned, className: 'slate' }
];

export default function ItineraryStats({ itinerary }) {
  return (
    <div className="stats-row">
      {stats.map(({ key, label, icon: Icon, className }) => (
        <div key={key} className={`stat-card ${className}`}>
          <Icon size={20} />
          <div>
            <span>{label}</span>
            <strong>{itinerary[key]}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
