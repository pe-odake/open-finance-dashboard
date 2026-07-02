import '../../styles/components/layout/Header.css'

function Header() {
  return (
    <header className="header">
      {/* Left: Mobile logo + Greeting + Sync */}
      <div className="header-left">
        {/* Mobile logo - shown only on small screens */}
        <div className="header-mobile-logo">
          <div className="header-mobile-logo-icon">
            <span className="material-symbols-outlined filled">account_balance</span>
          </div>
          <span className="header-mobile-logo-text">Open Finance</span>
        </div>

        {/* Desktop greeting */}
        <h1 className="header-greeting">Bom dia, Pedro Demo</h1>

        {/* Sync chip */}
        <div className="header-sync-chip">
          <span className="header-sync-dot"></span>
          <span className="header-sync-text">Sincronizado agora</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="header-right">
        <button className="header-icon-btn" title="Notificações">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="header-icon-btn" title="Ajuda">
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="header-avatar">PD</div>
      </div>
    </header>
  )
}

export default Header
