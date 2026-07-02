import { Link } from 'react-router-dom'
import '../styles/pages/DashboardPage.css'

function DashboardPage() {
  return (
    <div className="dashboard">
      {/* SSE Success Banner */}
      <div className="sse-banner">
        <div className="sse-banner-icon">
          <span className="material-symbols-outlined filled">check_circle</span>
        </div>
        <div className="sse-banner-content">
          <p className="sse-banner-title">Sincronização concluída com sucesso</p>
          <p className="sse-banner-sub">Todas as contas foram atualizadas às 14:32.</p>
        </div>
        <button className="sse-banner-close">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        {/* Patrimônio */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span className="material-symbols-outlined">account_balance_wallet</span>
            <span className="metric-card-label">Patrimônio Consolidado</span>
          </div>
          <div className="metric-card-value">R$ 12.847,30</div>
          <div className="metric-card-footer metric-trend-positive">
            <span className="material-symbols-outlined">trending_up</span>
            <span style={{ fontSize: '11px', lineHeight: '14px' }}>+2.4% vs mês anterior</span>
          </div>
        </div>

        {/* Entradas */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span className="material-symbols-outlined">arrow_downward</span>
            <span className="metric-card-label">Entradas (Mês)</span>
          </div>
          <div className="metric-card-value">R$ 5.200,00</div>
          <div className="metric-card-footer">
            <span className="metric-footer-text">Previsto: R$ 5.500,00</span>
          </div>
        </div>

        {/* Saídas */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span className="material-symbols-outlined">arrow_upward</span>
            <span className="metric-card-label">Saídas (Mês)</span>
          </div>
          <div className="metric-card-value">R$ 4.780,00</div>
          <div className="metric-card-footer">
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: '85%' }}></div>
            </div>
            <span className="progress-label">85% do limite</span>
          </div>
        </div>
      </div>

      {/* Chart & Accounts Split */}
      <div className="chart-accounts-grid">
        {/* Chart */}
        <div className="card chart-card">
          <div className="card-header">
            <h3 className="card-title">Evolução Patrimonial</h3>
            <select className="chart-select">
              <option>6 Meses</option>
              <option>1 Ano</option>
              <option>YTD</option>
            </select>
          </div>
          <div className="chart-area">
            <div className="chart-y-axis">
              <span>15k</span>
              <span>12k</span>
              <span>9k</span>
              <span>6k</span>
            </div>
            <div className="chart-plot">
              <div className="chart-grid-line" style={{ top: '0%' }}></div>
              <div className="chart-grid-line" style={{ top: '33%' }}></div>
              <div className="chart-grid-line" style={{ top: '66%' }}></div>
              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#185fa5" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#185fa5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,80 Q 20,75 40,60 T 60,40 T 80,30 T 100,10 L 100,100 L 0,100 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M 0,80 Q 20,75 40,60 T 60,40 T 80,30 T 100,10"
                  fill="none"
                  stroke="#185fa5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <circle cx="100" cy="10" r="4" fill="#FFFFFF" stroke="#185fa5" strokeWidth="2" />
              </svg>
            </div>
            <div className="chart-x-axis">
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Accounts */}
        <div className="card accounts-card">
          <div className="card-header">
            <h3 className="card-title">Minhas contas</h3>
            <button className="add-btn-icon">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="accounts-list">
            {/* Itaú */}
            <div className="account-item">
              <div className="account-item-left">
                <div className="account-icon" style={{ backgroundColor: 'var(--color-attention-soft)', color: 'var(--color-attention)' }}>
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <div className="account-name">Itaú</div>
                  <div className="account-type">Conta Corrente</div>
                </div>
              </div>
              <span className="account-balance">R$ 5.420,00</span>
            </div>
            {/* Nubank */}
            <div className="account-item">
              <div className="account-item-left">
                <div className="account-icon" style={{ backgroundColor: '#E8E1F4', color: '#8A05BE' }}>
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div>
                  <div className="account-name">Nubank</div>
                  <div className="account-type">Conta Digital</div>
                </div>
              </div>
              <span className="account-balance">R$ 3.100,50</span>
            </div>
            {/* BB */}
            <div className="account-item">
              <div className="account-item-left">
                <div className="account-icon" style={{ backgroundColor: '#FFF5C1', color: '#F9C300' }}>
                  <span className="material-symbols-outlined">savings</span>
                </div>
                <div>
                  <div className="account-name">Banco do Brasil</div>
                  <div className="account-type">Poupança</div>
                </div>
              </div>
              <span className="account-balance">R$ 4.326,80</span>
            </div>
          </div>
          <div className="accounts-footer">
            <Link to="/accounts">Ver todos os saldos</Link>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="transactions-card">
        <div className="transactions-card-header">
          <h3 className="card-title">Transações recentes</h3>
          <Link to="/transactions" className="transactions-see-all">
            <span>Ver todas</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="table-scroll">
          <table className="transactions-table">
            <thead>
              <tr>
                <th style={{ width: '96px' }}>Data</th>
                <th>Descrição</th>
                <th style={{ width: '128px' }}>Categoria</th>
                <th style={{ width: '128px', textAlign: 'right' }}>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-date">Hoje, 09:41</td>
                <td>
                  <div className="td-description">
                    <div className="td-desc-icon td-desc-icon-default">
                      <span className="material-symbols-outlined">shopping_cart</span>
                    </div>
                    <span className="td-desc-text">Supermercado</span>
                  </div>
                </td>
                <td><span className="category-chip">Alimentação</span></td>
                <td className="td-value">- R$ 342,50</td>
              </tr>
              <tr>
                <td className="td-date">Ontem, 18:00</td>
                <td>
                  <div className="td-description">
                    <div className="td-desc-icon td-desc-icon-positive">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                    <span className="td-desc-text">Salário</span>
                  </div>
                </td>
                <td><span className="category-chip category-chip-positive">Receita</span></td>
                <td className="td-value td-value-positive">+ R$ 5.200,00</td>
              </tr>
              <tr>
                <td className="td-date">Ontem, 14:20</td>
                <td>
                  <div className="td-description">
                    <div className="td-desc-icon td-desc-icon-default">
                      <span className="material-symbols-outlined">live_tv</span>
                    </div>
                    <span className="td-desc-text">Netflix</span>
                  </div>
                </td>
                <td><span className="category-chip">Lazer</span></td>
                <td className="td-value">- R$ 55,90</td>
              </tr>
              <tr>
                <td className="td-date">24 Jun, 10:15</td>
                <td>
                  <div className="td-description">
                    <div className="td-desc-icon td-desc-icon-default">
                      <span className="material-symbols-outlined">medical_services</span>
                    </div>
                    <span className="td-desc-text">Farmácia</span>
                  </div>
                </td>
                <td><span className="category-chip">Saúde</span></td>
                <td className="td-value">- R$ 128,40</td>
              </tr>
              <tr>
                <td className="td-date">22 Jun, 22:30</td>
                <td>
                  <div className="td-description">
                    <div className="td-desc-icon td-desc-icon-default">
                      <span className="material-symbols-outlined">directions_car</span>
                    </div>
                    <span className="td-desc-text">Uber</span>
                  </div>
                </td>
                <td><span className="category-chip">Transporte</span></td>
                <td className="td-value">- R$ 34,90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
