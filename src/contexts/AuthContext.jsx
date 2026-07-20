import { createContext, useContext, useState, useEffect } from 'react';
import { login as loginApi, register as registerApi } from '../api/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = async (loginData) => {
    const data = await loginApi(loginData);

    const userData = {
      id: data.id,
      nome: data.nome,
      login: data.login,
      perfil: data.perfil,
    };

    localStorage.setItem("token", data.tokenJWT);
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const register = async (registerData) => {
    await registerApi(registerData);

    const loginData = {
      login: registerData.login,
      senha: registerData.senha,
    };

    await login(loginData);
  };

  return (
    <AuthContext.Provider value={{
      user, // { id, nome, login, perfil } ou null
      loading, // true enquanto verifica localStorage no mount
      login, // funcao para logar
      logout, // funcao para deslogar
      register, // funcao de registrar 
      isAuthenticated: !!user,  
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um <AuthProvider>");
  }
  return context;
}
