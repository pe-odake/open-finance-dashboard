import { Link, useLocation } from 'react-router-dom'
import '../../styles/components/layout/Sidebar.css'

function Sidebar({ activePage }) {
  return (
    <nav className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <span>OPFI</span>
      </div>

      {/* Main Nav */}
      <div className="sidebar-nav">
        <Link
          to="/dashboard"
          className={`sidebar-link${activePage === 'dashboard' ? ' active' : ''}`}
          title="Dashboard"
        >
          <span className="material-symbols-outlined">dashboard</span>
        </Link>
        <Link
          to="/accounts"
          className={`sidebar-link${activePage === 'accounts' ? ' active' : ''}`}
          title="Contas"
        >
          <span className="material-symbols-outlined">account_balance</span>
        </Link>
        <Link
          to="/transactions"
          className={`sidebar-link${activePage === 'transactions' ? ' active' : ''}`}
          title="Transações"
        >
          <span className="material-symbols-outlined">receipt_long</span>
        </Link>
        <Link
          to="/analysis"
          className={`sidebar-link${activePage === 'analysis' ? ' active' : ''}`}
          title="Análise"
        >
          <span className="material-symbols-outlined">insights</span>
        </Link>
        <Link
          to="/consents"
          className={`sidebar-link${activePage === 'consents' ? ' active' : ''}`}
          title="Consentimentos"
        >
          <span className="material-symbols-outlined">fact_check</span>
        </Link>
      </div>

      {/* Bottom Nav */}
      <div className="sidebar-nav-bottom">
        <Link
          to="/settings"
          className={`sidebar-link${activePage === 'settings' ? ' active' : ''}`}
          title="Configurações"
        >
          <span className="material-symbols-outlined">settings</span>
        </Link>
        <Link to="/login" className="sidebar-link" title="Sair">
          <span className="material-symbols-outlined">logout</span>
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
