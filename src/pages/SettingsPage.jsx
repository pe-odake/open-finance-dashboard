import { Link } from 'react-router-dom'
import '../styles/pages/SettingsPage.css'

function SettingsPage() {
  return (
    <div className="settings-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-text">
          <h1>Configurações</h1>
          <p>Gerencie suas preferências de conta, notificações e segurança.</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="settings-section">
        <div className="settings-section-title">Meu perfil</div>
        <div className="profile-layout">
          <div className="profile-avatar-area">
            <div className="profile-avatar">PO</div>
            <span className="profile-avatar-link">Alterar foto</span>
          </div>
          <div className="profile-fields">
            <div className="settings-field">
              <label>Nome completo</label>
              <input className="settings-input" type="text" defaultValue="Pedro Odake" />
            </div>
            <div className="settings-field">
              <label>E-mail corporativo</label>
              <input className="settings-input settings-input-readonly" type="email" defaultValue="pedro.odake@capitalflow.com" readOnly />
            </div>
            <div>
              <span className="change-password-link">
                <span className="material-symbols-outlined">lock</span>
                <span>Alterar Senha</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sync Section */}
      <div className="settings-section">
        <div className="settings-toggle-row">
          <div className="settings-toggle-info">
            <h3>Sincronização</h3>
            <p>Mantenha seus dados financeiros atualizados em tempo real.</p>
          </div>
          <div className="toggle-group">
            <div className="toggle-switch"></div>
            <span className="toggle-label">Ativa</span>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="settings-section">
        <div className="settings-section-title">Notificações</div>
        <p style={{ fontSize: '13px', color: 'var(--color-secondary)', marginTop: '-12px', marginBottom: '4px' }}>
          Escolha quais atualizações você deseja receber.
        </p>
        <div className="notification-list">
          <div className="notification-item">
            <div className="notification-info">
              <h4>Alertas de movimentação</h4>
              <p>Avisos sobre transações atípicas.</p>
            </div>
            <div className="toggle-switch"></div>
          </div>
          <div className="notification-item">
            <div className="notification-info">
              <h4>Relatórios de erro</h4>
              <p>Falhas na sincronização de instituições.</p>
            </div>
            <div className="toggle-switch"></div>
          </div>
          <div className="notification-item">
            <div className="notification-info">
              <h4>Segurança</h4>
              <p>Acessos de novos dispositivos e IPs.</p>
            </div>
            <div className="toggle-switch"></div>
          </div>
        </div>
      </div>

      {/* Account Management */}
      <div className="settings-section">
        <div className="settings-section-title">Gerenciamento de Conta</div>
        <div className="account-management-btns">
          <Link to="/login" className="btn-logout">
            <span className="material-symbols-outlined">logout</span>
            <span>Sair da conta</span>
          </Link>
          <button className="btn-delete-account">
            <span className="material-symbols-outlined">delete</span>
            <span>Excluir conta</span>
          </button>
        </div>
      </div>

      {/* LGPD Footer */}
      <div className="lgpd-footer">
        <span className="material-symbols-outlined filled">shield</span>
        <p>
          <strong>Segurança e Privacidade:</strong> Seus dados financeiros estão protegidos e processados em rigorosa conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>
      </div>

      {/* Save Button */}
      <div className="settings-save-area">
        <button className="btn-save">
          <span className="material-symbols-outlined">save</span>
          <span>Salvar configurações</span>
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
