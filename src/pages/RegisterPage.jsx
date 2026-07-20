import { Link, useNavigate } from 'react-router-dom'
import { use, useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import '../styles/pages/LoginPage.css'
import '../api/auth';

function RegisterPage() {
  const navigate = useNavigate();
  const { register: authRegister } = useAuth();

  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  // const [senhaConfirmada, setSenhaConfirmada] = useState("");
  const perfil = "DEFAULT";
    
  const [loginError, setLoginError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoginError("");

    // if (senha == senhaConfirmada) {
    //   console.log("SENHA IGUAL");
    // }
    // else {
    //   console.log("SENHAS DIFERENTES");
    //   // PARA E NA TELA PEDE PARA ESCREVER A MESMA SENHA
    // }

    try {
      await authRegister({nome, login, senha, perfil});
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      setLoginError(error.message || "Erro ao conectar com o servidor.");
    }
  }

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
                    type="password"
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}
                    placeholder="••••••••"
                  />
                  <button type="button" className="input-icon-btn">
                    <span className="material-symbols-outlined">visibility_off</span>
                  </button>
                </div>
                {/* INDICADOR DE FORCA DA SENHA */}
                {/* <div className="password-strength">
                  <div className="password-strength-bar">
                    <div
                      className="password-strength-fill"
                      style={{ width: '60%', backgroundColor: 'var(--color-attention)' }}
                    ></div>
                  </div>
                  <span className="password-strength-text" style={{ color: 'var(--color-attention)' }}>
                    Média
                  </span>
                </div> */}
              </div>

              {/* CONFIRMACAO SENHA */}
              {/* <div className="form-field">
                <label htmlFor="confirm-password">Confirmar senha</label>
                <div className="input-with-icon">
                  <input
                    className="form-input"
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    onChange={(e) => setsenhaConfirmada(e.target.value)}
                    value={senhaConfirmada}
                    placeholder="••••••••"
                  />
                </div>
              </div> */}
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
