import { Link } from 'react-router-dom'
import '../styles/pages/LoginPage.css'

function LoginPage() {
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
            <h2>Entrar na sua conta</h2>
            <p>Bem-vindo de volta! Por favor, insira seus dados.</p>
          </div>

          <form>
            <div className="login-fields">
              {/* Email */}
              <div className="form-field">
                <label htmlFor="email">E-mail</label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nome@empresa.com"
                />
              </div>

              {/* Password */}
              <div className="form-field">
                <div className="form-label-row">
                  <label htmlFor="password">Senha</label>
                  <a href="#">Esqueci minha senha</a>
                </div>
                <div className="input-with-icon">
                  <input
                    className="form-input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                  />
                  <button type="button" className="input-icon-btn">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="login-actions">
              <button type="submit" className="btn-primary">Entrar</button>
              <button type="button" className="btn-outline">
                <span className="material-symbols-outlined">labs</span>
                <span>Entrar com conta de demonstração</span>
              </button>
            </div>
          </form>

          <div className="login-footer">
            <p>Não tem uma conta? <Link to="/register">Criar conta</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
