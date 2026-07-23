import '../styles/pages/AccountsPage.css'
import { useState, useEffect } from 'react';
import AccountCard from '../components/AccountCard'
import AddAccountModal from '../components/AddAccountModal'
import { listarContas, criarConta } from '../api/contas';
import { useAuth } from '../contexts/AuthContext.jsx';

function AccountsPage() {

  const [contas, setContas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAuth();
  const userId = user?.id;

  // PEGAR AS CONTAR - GET

  useEffect(() => {
    async function carregarContas() {
      try {
        const response = await listarContas();
        setContas(response.content || response); 
      } catch (error) {
        console.error("Erro ao buscar contas:", error);
      } finally {
        setLoading(false);
      }
    }
    carregarContas();
  }, []); 

  const contasFiltradas = contas.filter((conta) => !userId || conta.usuarioId === userId);

  // CRIAR/CONECTAR CONTAS - POST

  const handleAddAccount = async (novaConta) => {
    try {
      console.log(novaConta);
      const contaCriada = await criarConta(novaConta); 
      setContas((contasAntigas) => [...contasAntigas, contaCriada]);
      console.log("Conta criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Não foi possível cadastrar a conta.");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="accounts-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-text">
          <h1>Contas</h1>
          <p>Gerencie suas conexões financeiras.</p>
        </div>
        <button className="btn-primary-sm" onClick={() => setIsModalOpen(true)}>
          <span className="material-symbols-outlined">add</span>
          <span>Adicionar conta</span>
        </button>
      </div>

      {/* CONTAS */}
      <div className="accounts-grid">

        {contasFiltradas.length === 0 ? (
          <div className="accounts-empty">
            <span className="material-symbols-outlined accounts-empty-icon">account_balance</span>
            <p className="accounts-empty-title">Nenhuma conta conectada</p>
            <p className="accounts-empty-text">Adicione uma conta para visualizar seu saldo e transações.</p>
          </div>
        ) : (
          contasFiltradas.map((conta) => (
            <AccountCard 
              key={conta.id}
              bankName={conta.nomeBanco}
              balance={conta.saldo != null ? Number(conta.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "R$ 0,00"}
              syncText="Última sinc. há 2 horas"
              statusText="Sincronizado"
            />
          ))
        )}

      </div>

      {/* Bottom Section */}
      <div className="accounts-bottom">
        {/* Patrimony chart */}
        <div className="patrimony-card">
          <div className="card-header">
            <h3 className="card-title">Visão Geral de Patrimônio</h3>
            <select className="chart-select">
              <option>Mensal</option>
              <option>Trimestral</option>
            </select>
          </div>
          <div className="patrimony-chart">
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '50%', backgroundColor: 'var(--color-surface-container-high)' }}></div>
              <span className="patrimony-bar-label">Jan</span>
            </div>
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '60%', backgroundColor: 'var(--color-surface-container-high)' }}></div>
              <span className="patrimony-bar-label">Fev</span>
            </div>
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '80%', backgroundColor: 'var(--color-primary-soft)' , borderTop: '2px solid var(--color-primary)' }}></div>
              <span className="patrimony-bar-label patrimony-bar-label-active">Mar</span>
            </div>
            <div className="patrimony-bar-group">
              <div className="patrimony-bar" style={{ height: '70%', backgroundColor: 'var(--color-surface-container-high)' }}></div>
              <span className="patrimony-bar-label">Abr</span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="security-card">
          <div className="security-icon">
            <span className="material-symbols-outlined filled">shield</span>
          </div>
          <div className="security-title">Segurança de Dados</div>
          <p className="security-text">
            Suas conexões via Open Finance são protegidas por criptografia ponta a ponta e reguladas pelo Banco Central.
          </p>
          <button className="btn-outline-sm">Saber mais</button>
        </div>
      </div>

      <AddAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddAccount}
      />
    </div>
  )
}

export default AccountsPage
