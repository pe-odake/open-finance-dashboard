import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import '../styles/pages/LoginPage.css'

function LoginPage() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [loginError, setLoginError] = useState("");

  const extractErrorMessage = (error) => {
    if (!error.response) {
      return "Erro ao conectar com o servidor.";
    }

    const data = error.response.data;

    // Se o backend enviou uma string simples
    if (typeof data === "string") {
      return data;
    }

    // Se o backend enviou um objeto
    if (data && typeof data === "object") {
      if (typeof data.mensagem === "string") return data.mensagem;
      if (typeof data.message === "string") return data.message;

      // Se for uma lista de erros de validação: [{ campo, mensagem }, ...]
      if (Array.isArray(data) && data.length > 0) {
        return data.map(item => item.mensagem || item.message || JSON.stringify(item)).join(", ");
      }
    }

    if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403) {
      return "E-mail ou senha incorretos.";
    }

    return "Erro ao realizar login. Verifique os dados.";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!login || !senha) {
      setLoginError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await authLogin({ login, senha });
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login:", error);
      setLoginError(extractErrorMessage(error));
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

          {loginError && (
            <div className="login-error-message">
              <span className="material-symbols-outlined">error</span>
              <span>{loginError}</span>
            </div>
          )}

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
                    type={showSenha ? "text" : "password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button 
                    type="button" 
                    className="input-icon-btn"
                    onClick={() => setShowSenha(!showSenha)}
                    title={showSenha ? "Ocultar senha" : "Mostrar senha"}
                  >
                    <span className="material-symbols-outlined">
                      {showSenha ? "visibility" : "visibility_off"}
                    </span>
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
