export default function Sidebar({ navItems }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand"><span>↻</span></div>
      <nav>
        {navItems.map(({ label, icon: Icon, active }) => (
          <a key={label} href="#" className={active ? 'active' : ''} title={label}>
            <Icon size={22} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
