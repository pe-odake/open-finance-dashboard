import { Link } from 'react-router-dom'
import '../../styles/components/layout/MobileBottomNav.css'

function MobileBottomNav({ activePage }) {
  return (
    <nav className="bottom-nav">
      <Link
        to="/dashboard"
        className={`bottom-nav-link${activePage === 'dashboard' ? ' active' : ''}`}
      >
        <span className="material-symbols-outlined">dashboard</span>
        <span className="bottom-nav-label">Início</span>
      </Link>
      <Link
        to="/accounts"
        className={`bottom-nav-link${activePage === 'accounts' ? ' active' : ''}`}
      >
        <span className="material-symbols-outlined">account_balance</span>
        <span className="bottom-nav-label">Contas</span>
      </Link>
      <Link
        to="/transactions"
        className={`bottom-nav-link${activePage === 'transactions' ? ' active' : ''}`}
      >
        <span className="material-symbols-outlined">receipt_long</span>
        <span className="bottom-nav-label">Extrato</span>
      </Link>
      <Link
        to="/analysis"
        className={`bottom-nav-link${activePage === 'analysis' ? ' active' : ''}`}
      >
        <span className="material-symbols-outlined">insights</span>
        <span className="bottom-nav-label">Análise</span>
      </Link>
      <Link
        to="/settings"
        className={`bottom-nav-link${activePage === 'settings' ? ' active' : ''}`}
      >
        <span className="material-symbols-outlined">settings</span>
        <span className="bottom-nav-label">Ajustes</span>
      </Link>
    </nav>
  )
}

export default MobileBottomNav
