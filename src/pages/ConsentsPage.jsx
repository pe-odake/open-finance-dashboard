import '../styles/pages/ConsentsPage.css'

function ConsentsPage() {
  return (
    <div className="consents-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-text">
          <h1>Gerenciar Consentimentos</h1>
          <p>Acompanhe e gerencie as permissões de compartilhamento de dados ativos e históricos.</p>
        </div>
      </div>

      {/* Active Consents */}
      <div>
        <div className="section-header">
          <div className="section-title" style={{ color: 'var(--color-positive)' }}>
            <span className="material-symbols-outlined filled">check_circle</span>
            <span style={{ color: 'var(--color-text-primary)' }}>Ativos</span>
          </div>
          <span className="section-count">3 Instituições</span>
        </div>

        <div className="consents-grid">
          {/* Santander */}
          <div className="consent-card">
            <div className="consent-card-top">
              <div className="consent-bank">
                <div className="consent-bank-icon" style={{ backgroundColor: '#FDE8E8', color: '#EB0000' }}>
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <div className="consent-bank-name">Santander</div>
                  <div className="consent-bank-type">Conta Corrente</div>
                </div>
              </div>
              <span className="status-chip status-chip-active">Ativo</span>
            </div>
            <div className="permission-chips">
              <span className="permission-chip">Saldos</span>
              <span className="permission-chip">Extratos</span>
            </div>
            <div className="consent-footer">
              <div>
                <div className="consent-date-label">Vence em</div>
                <div className="consent-date-value">12/10/2024</div>
              </div>
              <button className="btn-revoke">
                <span className="material-symbols-outlined">cancel</span>
                <span>Revogar</span>
              </button>
            </div>
          </div>

          {/* Itaú */}
          <div className="consent-card">
            <div className="consent-card-top">
              <div className="consent-bank">
                <div className="consent-bank-icon" style={{ backgroundColor: 'var(--color-attention-soft)', color: 'var(--color-attention)' }}>
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <div className="consent-bank-name">Itaú</div>
                  <div className="consent-bank-type">Cartão de Crédito</div>
                </div>
              </div>
              <span className="status-chip status-chip-active">Ativo</span>
            </div>
            <div className="permission-chips">
              <span className="permission-chip">Faturas</span>
              <span className="permission-chip">Limites</span>
            </div>
            <div className="consent-footer">
              <div>
                <div className="consent-date-label">Vence em</div>
                <div className="consent-date-value">05/11/2024</div>
              </div>
              <button className="btn-revoke">
                <span className="material-symbols-outlined">cancel</span>
                <span>Revogar</span>
              </button>
            </div>
          </div>

          {/* Nubank */}
          <div className="consent-card">
            <div className="consent-card-top">
              <div className="consent-bank">
                <div className="consent-bank-icon" style={{ backgroundColor: '#E8E1F4', color: '#8A05BE' }}>
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div>
                  <div className="consent-bank-name">Nubank</div>
                  <div className="consent-bank-type">Dados Pessoais</div>
                </div>
              </div>
              <span className="status-chip status-chip-active">Ativo</span>
            </div>
            <div className="permission-chips">
              <span className="permission-chip">Cadastro</span>
            </div>
            <div className="consent-footer">
              <div>
                <div className="consent-date-label">Vence em</div>
                <div className="consent-date-value">20/12/2024</div>
              </div>
              <button className="btn-revoke">
                <span className="material-symbols-outlined">cancel</span>
                <span>Revogar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div>
        <div className="section-header">
          <div className="section-title">
            <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>history</span>
            <span>Histórico</span>
          </div>
        </div>

        <div className="consents-grid-history">
          {/* Banco do Brasil - Revogado */}
          <div className="consent-card consent-card-muted">
            <div className="consent-card-top">
              <div className="consent-bank">
                <div className="consent-bank-icon" style={{ backgroundColor: '#FFF5C1', color: '#F9C300' }}>
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <div>
                  <div className="consent-bank-name">Banco do Brasil</div>
                  <div className="consent-bank-type">Investimentos</div>
                </div>
              </div>
              <span className="status-chip status-chip-revoked">Revogado</span>
            </div>
            <div className="permission-chips">
              <span className="permission-chip">Posição de Carteira</span>
            </div>
            <div className="consent-footer">
              <div>
                <div className="consent-date-label">Encerrado em</div>
                <div className="consent-date-value">15/05/2023</div>
              </div>
              <button className="btn-reactivate">
                <span className="material-symbols-outlined">refresh</span>
                <span>Reativar</span>
              </button>
            </div>
          </div>

          {/* Bradesco - Expirado */}
          <div className="consent-card consent-card-muted">
            <div className="consent-card-top">
              <div className="consent-bank">
                <div className="consent-bank-icon" style={{ backgroundColor: '#FFE0E0', color: '#CC0000' }}>
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div>
                  <div className="consent-bank-name">Bradesco</div>
                  <div className="consent-bank-type">Cartões</div>
                </div>
              </div>
              <span className="status-chip status-chip-expired">Expirado</span>
            </div>
            <div className="permission-chips">
              <span className="permission-chip">Faturas</span>
            </div>
            <div className="consent-footer">
              <div>
                <div className="consent-date-label">Expirou em</div>
                <div className="consent-date-value">10/01/2024</div>
              </div>
              <button className="btn-reactivate">
                <span className="material-symbols-outlined">refresh</span>
                <span>Reativar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-banner-text">
          <h3>Compartilhar Novos Dados</h3>
          <p>Conecte mais instituições para obter uma visão consolidada do seu patrimônio e acessar análises financeiras mais precisas. O processo é rápido e seguro.</p>
        </div>
        <button className="btn-cta">
          <span>+ Novo Consentimento</span>
        </button>
      </div>
    </div>
  )
}

export default ConsentsPage
