import '../styles/pages/AccountsPage.css'

function AccountsPage() {
  return (
    <div className="accounts-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-text">
          <h1>Contas</h1>
          <p>Gerencie suas conexões financeiras.</p>
        </div>
        <button className="btn-primary-sm">
          <span className="material-symbols-outlined">add</span>
          <span>Adicionar conta</span>
        </button>
      </div>

      {/* Accounts Grid */}
      <div className="accounts-grid">
        {/* Itaú */}
        <div className="account-card">
          <div className="account-card-top">
            <div className="account-card-bank">
              <div className="account-card-icon" style={{ backgroundColor: 'var(--color-attention-soft)', color: 'var(--color-attention)' }}>
                <span className="material-symbols-outlined">account_balance</span>
              </div>
              <span className="account-card-bank-name">Itaú</span>
            </div>
            <button className="account-card-menu">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="account-card-status">
            <span className="account-status-dot"></span>
            <span className="account-status-text">Sincronizado</span>
          </div>
          <div>
            <div className="account-card-balance-label">Saldo atual</div>
            <div className="account-card-balance">R$ 4.250,12</div>
          </div>
          <div className="account-card-sync">Última sinc. há 2 horas</div>
          <div className="account-card-actions">
            <button className="btn-sync">Sincronizar</button>
            <button className="btn-delete">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>

        {/* Nubank */}
        <div className="account-card">
          <div className="account-card-top">
            <div className="account-card-bank">
              <div className="account-card-icon" style={{ backgroundColor: '#E8E1F4', color: '#8A05BE' }}>
                <span className="material-symbols-outlined">credit_card</span>
              </div>
              <span className="account-card-bank-name">Nubank</span>
            </div>
            <button className="account-card-menu">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="account-card-status">
            <span className="account-status-dot"></span>
            <span className="account-status-text">Sincronizado</span>
          </div>
          <div>
            <div className="account-card-balance-label">Saldo atual</div>
            <div className="account-card-balance">R$ 12.840,50</div>
          </div>
          <div className="account-card-sync">Última sinc. há 5 min</div>
          <div className="account-card-actions">
            <button className="btn-sync">Sincronizar</button>
            <button className="btn-delete">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>

        {/* Banco do Brasil */}
        <div className="account-card">
          <div className="account-card-top">
            <div className="account-card-bank">
              <div className="account-card-icon" style={{ backgroundColor: '#FFF5C1', color: '#F9C300' }}>
                <span className="material-symbols-outlined">savings</span>
              </div>
              <span className="account-card-bank-name">Banco do Brasil</span>
            </div>
            <button className="account-card-menu">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div className="account-card-status">
            <span className="account-status-dot"></span>
            <span className="account-status-text">Sincronizado</span>
          </div>
          <div>
            <div className="account-card-balance-label">Saldo atual</div>
            <div className="account-card-balance">R$ 2.115,00</div>
          </div>
          <div className="account-card-sync">Última sinc. ontem</div>
          <div className="account-card-actions">
            <button className="btn-sync">Sincronizar</button>
            <button className="btn-delete">
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="accounts-bottom">
        {/* Patrimony chart */}
        <div className="patrimony-card">
          <div className="card-header">
            <h3 className="card-title">Visão Geral de Patrimônio</h3>
            <select className="chart-select">
              <option>Mensal</option>
              <option>Trimestral</option>
            </select>
          </div>
          <div className="patrimony-chart">
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '50%', backgroundColor: 'var(--color-surface-container-high)' }}></div>
              <span className="patrimony-bar-label">Jan</span>
            </div>
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '60%', backgroundColor: 'var(--color-surface-container-high)' }}></div>
              <span className="patrimony-bar-label">Fev</span>
            </div>
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '80%', backgroundColor: 'var(--color-primary-soft)' , borderTop: '2px solid var(--color-primary)' }}></div>
              <span className="patrimony-bar-label patrimony-bar-label-active">Mar</span>
            </div>
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '70%', backgroundColor: 'var(--color-surface-container-high)' }}></div>
              <span className="patrimony-bar-label">Abr</span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="security-card">
          <div className="security-icon">
            <span className="material-symbols-outlined filled">shield</span>
          </div>
          <div className="security-title">Segurança de Dados</div>
          <p className="security-text">
            Suas conexões via Open Finance são protegidas por criptografia ponta a ponta e reguladas pelo Banco Central.
          </p>
          <button className="btn-outline-sm">Saber mais</button>
        </div>
      </div>
    </div>
  )
}

export default AccountsPage
