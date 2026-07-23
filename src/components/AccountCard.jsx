import '../styles/components/AccountCard.css'
import { Itau, Bradesco, Nubank, Santander, Caixa, BancoDoBrasil, Inter, C6Bank } from "react-bancos";

function AccountCard({
  bankName, 
  balance, 
  syncText, 
  statusText,
}) {

  const bancoLogos = {
    ITAU: <Itau size={40} radius={10} />,
    BRADESCO: <Bradesco size={40} radius={10} />,
    NUBANK: <Nubank size={40} radius={10} />,
    SANTADER: <Santander size={40} radius={10} />,
    SANTANDER: <Santander size={40} radius={10} />,
    CAIXA: <Caixa size={40} radius={10} />,
    BANCO_DO_BRASIL: <BancoDoBrasil size={40} radius={10} />,
    INTER: <Inter size={40} radius={10} />,
    C6_BANK: <C6Bank size={40} radius={10} />
  };

  const logo = bancoLogos[bankName?.toUpperCase()] || (
    <span className="material-symbols-outlined">account_balance</span>
  );

  return (
    <div className="account-card">
      <div className="account-card-top">
        <div className="account-card-bank">
          <div className="account-card-icon">
            {logo}
          </div>
          <span className="account-card-bank-name">{bankName}</span>
        </div>
        <button className="account-card-menu">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      <div className="account-card-status">
        <span className="account-status-dot"></span>
        <span className="account-status-text">{statusText}</span>
      </div>
      <div>
        <div className="account-card-balance-label">Saldo atual</div>
        <div className="account-card-balance">{balance}</div>
      </div>
      <div className="account-card-sync">{syncText}</div>
      <div className="account-card-actions">
        <button className="btn-sync">Sincronizar</button>
        <button className="btn-delete">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  )
}

export default AccountCard
