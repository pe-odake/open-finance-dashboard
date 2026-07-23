import { useState } from 'react';
import '../styles/components/AddAccountModal.css';
import { useAuth } from '../contexts/AuthContext.jsx';

function AddAccountModal({ isOpen, onClose, onSubmit }) {

  const [nomeBanco, setNomeBanco] = useState('');
  const [tipoConta, setTipoConta] = useState('');

  const { user } = useAuth();
  const usuarioId = user?.id;

  // FUNÇÕES  

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        usuarioId,
        nomeBanco,
        tipoConta
      });
    }
    setNomeBanco('');
    setTipoConta('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Nova Conta</h2>
          <button className="modal-close-btn" onClick={onClose} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="modal-form-group">
            <label htmlFor="nomeBanco">Nome do Banco</label>
            <select
              id="nomeBanco"
              className="modal-form-select"
              value={nomeBanco}
              onChange={(e) => setNomeBanco(e.target.value)}
              required
            >
              <option value="" disabled>Selecione um banco...</option>
              <option value="ITAU">Itaú</option>
              <option value="BRADESCO">Bradesco</option>
              <option value="NUBANK">Nubank</option>
              <option value="SANTADER">Santander</option>
              <option value="CAIXA">Caixa</option>
              <option value="BANCO_DO_BRASIL">Banco do Brasil</option>
              <option value="INTER">Inter</option>
              <option value="C6_BANK">C6 Bank</option>
            </select>
          </div>

          <div className="modal-form-group">
            <label htmlFor="numeroConta">Número da Conta (Desnecessário)</label>
            <input
              id="numeroConta"
              type="text"
              className="modal-form-input"
              placeholder="Ex: 12345-6 (Fictício)"
              disabled
            />
          </div>

          <div className="modal-form-group">
            <label htmlFor="senhaFicticia">Senha da Conta (Desnecessário)</label>
            <input
              id="senhaFicticia"
              type="password"
              className="modal-form-input"
              placeholder="••••••••"
              disabled
            />
          </div>

          <div className="modal-form-group">
            <label htmlFor="tipoConta">Tipo de Conta</label>
            <select
              id="tipoConta"
              className="modal-form-select"
              value={tipoConta}
              onChange={(e) => setTipoConta(e.target.value)}
              required
            >
              <option value="" disabled>Selecione o tipo de conta...</option>
              <option value="CORRENTE">Conta Corrente</option>
              <option value="POUPANCA">Conta Poupança</option>
              <option value="CREDITO">Conta Crédito</option>
            </select>
          </div>

          <button type="submit" className="btn-submit-modal">
            Adicionar Conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAccountModal;
