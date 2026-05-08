import { Bell, Settings, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="OneWay home">
        <span className="brand-mark">↻</span>
        <span>OneWay</span>
      </a>

      <label className="search-box">
        <Search size={18} />
        <input placeholder="Cerca città, percorsi, luoghi…" />
      </label>

      <div className="header-actions">
        <button className="round-button notification"><Bell size={19} /></button>
        <button className="round-button"><Settings size={19} /></button>
        <button className="round-button"><User size={19} /></button>
      </div>
    </header>
  );
}
