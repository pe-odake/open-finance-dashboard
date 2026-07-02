import { Link } from 'react-router-dom'
import '../styles/pages/LoginPage.css'

function RegisterPage() {
  return (
    <div className="login-page">
      {/* Left Brand Panel - Desktop Only */}
      <div className="login-brand">
        <div className="login-brand-logo">
          <span className="material-symbols-outlined filled">insights</span>
          <span>Open Finance</span>
        </div>
        <div className="login-brand-content">
          <h1>Suas finanças,<br />todas em um lugar.</h1>
          <p>
            Conecte suas contas, visualize seus gastos e tome decisões mais
            inteligentes com nossa plataforma institucional segura.
          </p>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="login-form-wrapper">
        {/* Mobile Logo */}
        <div className="login-mobile-logo">
          <span className="material-symbols-outlined filled">insights</span>
          <span className="login-mobile-logo-text">Open Finance</span>
        </div>

        <div className="login-form">
          <div className="login-form-header">
            <h2>Criar sua conta</h2>
            <p>Preencha os dados abaixo para começar.</p>
          </div>

          <form>
            <div className="login-fields">
              {/* Full Name */}
              <div className="form-field">
                <label htmlFor="fullname">Nome completo</label>
                <input
                  className="form-input"
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Ana Beatriz Santos"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="reg-email">E-mail</label>
                <input
                  className="form-input"
                  id="reg-email"
                  name="email"
                  type="email"
                  placeholder="nome@empresa.com"
                />
              </div>

              {/* Password */}
              <div className="form-field">
                <label htmlFor="reg-password">Senha</label>
                <div className="input-with-icon">
                  <input
                    className="form-input"
                    id="reg-password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                  />
                  <button type="button" className="input-icon-btn">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
                {/* Strength indicator */}
                <div className="password-strength">
                  <div className="password-strength-bar">
                    <div
                      className="password-strength-fill"
                      style={{ width: '60%', backgroundColor: 'var(--color-attention)' }}
                    ></div>
                  </div>
                  <span className="password-strength-text" style={{ color: 'var(--color-attention)' }}>
                    Média
                  </span>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="form-field">
                <label htmlFor="confirm-password">Confirmar senha</label>
                <div className="input-with-icon">
                  <input
                    className="form-input"
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="login-actions">
              <button type="submit" className="btn-primary">Criar conta</button>
            </div>
          </form>

          <div className="login-footer">
            <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
