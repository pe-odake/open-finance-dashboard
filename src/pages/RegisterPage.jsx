import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import '../styles/pages/LoginPage.css'

function RegisterPage() {
  const navigate = useNavigate();
  const { register: authRegister } = useAuth();

  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const perfil = "DEFAULT";
    
  const [registerError, setRegisterError] = useState("");

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

    return "Erro ao criar conta. Verifique os dados.";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");

    if (!nome || !login || !senha) {
      setRegisterError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await authRegister({ nome, login, senha, perfil });
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no registro:", error);
      setRegisterError(extractErrorMessage(error));
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
          <h1>Suas finanças,<br/>todas em um lugar.</h1>
          <p>
            Conecte suas contas, visualize seus gastos e tome decisões mais
            inteligentes com nossa plataforma institucional segura.
          </p>
        </div>
      </div>

      {/* PAINEL DIREITO DE REGISTER  */}
      <div className="login-form-wrapper">
        {/* MOBILE */}
        <div className="login-mobile-logo">
          <span className="material-symbols-outlined filled">insights</span>
          <span className="login-mobile-logo-text">Open Finance</span>
        </div>

        <div className="login-form">
          <div className="login-form-header">
            <h2>Criar sua conta</h2>
            <p>Preencha os dados abaixo para começar.</p>
          </div>

          {registerError && (
            <div className="login-error-message">
              <span className="material-symbols-outlined">error</span>
              <span>{registerError}</span>
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div className="login-fields">
              {/* NOME */}
              <div className="form-field">
                <label htmlFor="fullname">Nome completo</label>
                <input
                  className="form-input"
                  id="fullname"
                  name="fullname"
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
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
                  onChange={(e) => setLogin(e.target.value)}
                  value={login}
                  placeholder="nome@empresa.com"
                />
              </div>

              {/* SENHA */}
              <div className="form-field">
                <label htmlFor="reg-password">Senha</label>
                <div className="input-with-icon">
                  <input
                    className="form-input"
                    id="reg-password"
                    name="password"
                    type={showSenha ? "text" : "password"}
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}
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
