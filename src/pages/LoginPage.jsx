import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import '../styles/pages/LoginPage.css'

function LoginPage() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    try {
      await authLogin({ login, senha });
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      setLoginError(error.message || "Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-page">
      {/* PAINEL ESQUERDO */}
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

      {/* PAINEL DIREITO DE FORM DE LOGIN */}
      <div className="login-form-wrapper">
        {/* MOBILE SIMBOLOS */}
        <div className="login-mobile-logo">
          <span className="material-symbols-outlined filled">insights</span>
          <span className="login-mobile-logo-text">Open Finance</span>
        </div>

        <div className="login-form">
          <div className="login-form-header">
            <h2>Entrar na sua conta</h2>
            <p>Bem-vindo de volta! Por favor, insira seus dados.</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="login-fields">

              {/* EMAIL/login */}
              <div className="form-field">
                <label htmlFor="email">E-mail</label>
                <input
                  className="form-input"
                  id="email"
                  name="login"
                  type="email"
                  onChange={(e) => setLogin(e.target.value)}
                  value={login}
                  placeholder="nome@empresa.com"
                />
              </div>

              {/* SENHA */}
              <div className="form-field">
                <div className="form-label-row">
                  <label htmlFor="password">Senha</label>
                  <a href="#">Esqueci minha senha</a>
                </div>
                <div className="input-with-icon">
                  <input
                    className="form-input"
                    id="password"
                    name="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button type="button" className="input-icon-btn">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
              </div>
            </div>

            {/* AÇÕES */}
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
