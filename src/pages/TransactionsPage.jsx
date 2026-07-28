import '../styles/pages/TransactionsPage.css'
import '../styles/pages/DashboardPage.css'
import { Itau, Bradesco, Nubank, Santander, Caixa, BancoDoBrasil, Inter, C6Bank } from "react-bancos";
import { useState, useEffect } from 'react';
import { listarTransacoes } from '../services/transacoes'

function TransactionsPage() {

    const categoriaLogos = {
      LAZER: "sports_esports",       
      RENDA: "savings",              
      SAUDE: "medical_services",     
      MERCADO: "shopping_cart",      
      TRANSPORTE: "directions_car",  
      RESTAURANTE: "restaurant",     
      CONTA: "receipt_long",         
      FASTFOOD: "fastfood",          
      VESTIMENTA: "checkroom",       
      ALIMENTACAO: "flatware",       
      EDUCACAO: "school"   
    };

    const bancoLogos = {
      ITAU: <Itau size={25} radius={2} />,
      BRADESCO: <Bradesco size={25} radius={2} />,
      NUBANK: <Nubank size={25} radius={2} />,
      SANTANDER: <Santander size={25} radius={2} />,
      CAIXA: <Caixa size={25} radius={2} />,
      BANCO_DO_BRASIL: <BancoDoBrasil size={25} radius={2} />,
      INTER: <Inter size={25} radius={2} />,
      C6_BANK: <C6Bank size={25} radius={2} />
    };

    // FORMATAR DATAS
    
    const dataTabela = (dataStr) => {
      if (!dataStr) return '';

      const matchIso = dataStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (matchIso) {
        return `${matchIso[3]}/${matchIso[2]}`;
      }
      
      const matchBr = dataStr.match(/^(\d{2})\/(\d{2})\/(\d{2,4})/);
      if (matchBr) {
        return `${matchBr[1]}/${matchBr[2]}`;
      }
      
      const matchGeneric = dataStr.match(/^(\d{1,2})[\/\-](\d{1,2})/);
      if (matchGeneric) {
        const dia = matchGeneric[1].padStart(2, '0');
        const mes = matchGeneric[2].padStart(2, '0');
        return `${dia}/${mes}`;
      }
      const d = new Date(dataStr);
      if (!isNaN(d.getTime())) {
        const dia = String(d.getDate()).padStart(2, '0');
        const mes = String(d.getMonth() + 1).padStart(2, '0');
        return `${dia}/${mes}`;
      }
      return dataStr;
    };

    // ------------------------------------------------------------

    const [loading, setLoading] = useState(true);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [transacaoSelecionada, setTransacaoSelecionada] = useState(null);

    const [transacoes, setTransacoes] = useState({
      content: [],
      totalPages: 0,
      number: 0,
      totalElements: 0,
      size: 20
    });
  
    // PEGAR AS TRANSACOES - GET
  
    useEffect(() => {
        async function carregarTransacoes() {
          setLoading(true);
          try {
            const response = await listarTransacoes(paginaAtual); 
            setTransacoes(response); 
          } catch (error) {
            console.error("Erro ao buscar transacoes:", error);
          } finally {
            setLoading(false);
          }
        }
        carregarTransacoes();
      }, [paginaAtual]);

    // PAGINACAO
    const tamanhoPagina = transacoes.size || 20;
    const totalElementos = transacoes.totalElements || 0;
    const totalPaginas = transacoes.totalPages || Math.ceil(totalElementos / tamanhoPagina) || 1;

    const inicioCount = totalElementos === 0 ? 0 : paginaAtual * tamanhoPagina + 1;
    const fimCount = totalElementos === 0 ? 0 : Math.min((paginaAtual + 1) * tamanhoPagina, totalElementos);
    const textoPaginacao = totalElementos === 0
      ? 'Exibindo 0 de 0 transações'
      : `Exibindo ${inicioCount}–${fimCount} de ${totalElementos} transações`;

    const paginaAnterior = () => {
      if (paginaAtual > 0) {
        setPaginaAtual(paginaAtual - 1);
      }
    };

    const proximaPagina = () => {
      if (paginaAtual < totalPaginas - 1) {
        setPaginaAtual(paginaAtual + 1);
      }
    };

  return (
    <div className="transactions-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-text">
          <h1>Transações</h1>
          <p>Visualize e gerencie todas as suas movimentações.</p>
        </div>
        <button className="btn-outline-icon">
          <span className="material-symbols-outlined">download</span>
          <span>Baixar extrato</span>
        </button>
      </div>

      {/* Filters */}
      <div className="filters-card">
        <div className="filters-row">
          <div className="filter-search">
            <div className="filter-search-icon">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input type="text" placeholder="Buscar transação..." />
          </div>
          <select className="filter-select">
            <option>Todas as contas</option>
            <option>Itaú</option>
            <option>Nubank</option>
            <option>Banco do Brasil</option>
          </select>
          <select className="filter-select">
            <option>Todas as categorias</option>
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Lazer</option>
            <option>Saúde</option>
            <option>Moradia</option>
            <option>Renda</option>
            <option>Outros</option>
          </select>
          <select className="filter-select">
            <option>Este mês</option>
            <option>Mês passado</option>
            <option>Últimos 3 meses</option>
            <option>Personalizado</option>
          </select>
          <button className="btn-text">
            <span className="material-symbols-outlined">filter_list_off</span>
            <span>Limpar filtros</span>
          </button>
        </div>
      </div>

      <p className="results-count">{textoPaginacao}</p>

      {/* Table */}
      <div className="full-transactions-card">
        <div className="full-table-scroll">
          <table className="full-transactions-table">
            <thead>
              <tr>
                <th style={{ width: '100px' }}>Data</th>
                <th>Descrição</th>
                <th style={{ width: '150px' }}>Conta</th>
                <th style={{ width: '150px' }}>Categoria</th>
                <th style={{ width: '150px', textAlign: 'right' }}>Valor</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '32px' }}>
                    Carregando transações...
                  </td>
                </tr>
              ) : transacoes.content.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '32px' }}>
                    Nenhuma transação encontrada.
                  </td>
                </tr>
              ) : (
                transacoes.content.map((transacao, index) => {
                  const isRenda = transacao.categoria === "RENDA";
                  return (
                    <tr 
                      key={transacao.id || index}
                      onClick={() => setTransacaoSelecionada(transacao)}
                    >
                      <td className="td-date">{dataTabela(transacao.dataTransacao)}</td>
                      <td>
                        <div className="td-description">
                          <div className={`td-desc-icon ${isRenda ? 'td-desc-icon-positive' : 'td-desc-icon-negative'}`}>
                            <span className="material-symbols-outlined">
                              {categoriaLogos[transacao.categoria?.toUpperCase()] || 'receipt_long'}
                            </span>
                          </div>
                          <span className="td-desc-text">{transacao.descricao}</span>
                        </div>
                      </td>
                      <td className="td-account">
                        {bancoLogos[transacao.nomeBanco?.toUpperCase()]}
                      </td>
                      <td>
                        <span className={`category-chip ${isRenda ? 'category-chip-positive' : ''}`}>
                          {transacao.categoria}
                        </span>
                      </td>
                      <td className={`td-value ${isRenda ? 'td-value-positive' : 'td-value-negative'}`} style={{ textAlign: 'right' }}>
                        {isRenda ? '+ ' : '- '}
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transacao.valor)}
                      </td>
                    </tr>
                  );
                })
              )}  
            </tbody>
          </table>
        </div>

        {/* PAGINACAO */}
        <div className="pagination">
          <span className="pagination-info">{textoPaginacao}</span>
          <div className="pagination-buttons">
            <button 
              className={`pagination-btn ${paginaAtual === 0 ? 'pagination-btn-disabled' : ''}`}
              onClick={paginaAnterior}
              disabled={paginaAtual === 0}
            >
              ← Anterior
            </button>

            {Array.from({ length: totalPaginas }, (_, index) => (
              <button
                key={index}
                className={`pagination-btn ${paginaAtual === index ? 'pagination-btn-active' : ''}`}
                onClick={() => setPaginaAtual(index)}
              >
                {index + 1}
              </button>
            ))}

            <button 
              className={`pagination-btn ${paginaAtual >= totalPaginas - 1 ? 'pagination-btn-disabled' : ''}`}
              onClick={proximaPagina}
              disabled={paginaAtual >= totalPaginas - 1}
            >
              Próxima →
            </button>
          </div>
        </div>
      </div>

      {/* Side Sheet Modal: Detalhes da Transação */}
      <div 
        className={`transaction-modal-backdrop ${transacaoSelecionada ? 'active' : ''}`}
        onClick={() => setTransacaoSelecionada(null)}
      />
      
      <div className={`transaction-modal-sheet ${transacaoSelecionada ? 'active' : ''}`}>
        {transacaoSelecionada && (
          <>
            {/* Header */}
            <div className="sheet-header">
              <h3 className="sheet-title">{transacaoSelecionada.descricao}</h3>
              <button className="sheet-close-btn" onClick={() => setTransacaoSelecionada(null)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="sheet-body">
              {/* Brand Visual Anchor */}
              <div className="sheet-hero">
                <div className={`sheet-icon-box ${transacaoSelecionada.categoria === 'RENDA' ? 'positive' : 'negative'}`}>
                  <span className="material-symbols-outlined">
                    {categoriaLogos[transacaoSelecionada.categoria?.toUpperCase()] || 'receipt_long'}
                  </span>
                </div>
                <h4 className={`sheet-amount ${transacaoSelecionada.categoria === 'RENDA' ? 'positive' : 'negative'}`}>
                  {transacaoSelecionada.categoria === 'RENDA' ? '+ ' : '- '}
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transacaoSelecionada.valor)}
                </h4>
                <p className="sheet-date">{transacaoSelecionada.dataTransacao}</p>
              </div>

              {/* Details Table */}
              <div className="sheet-details">
                <p className="sheet-section-title">Informações da Transação</p>

                <div className="sheet-detail-row">
                  <span className="sheet-detail-label">Conta</span>
                  <div className="sheet-account-container">
                    <div className="sheet-account-badge">
                      {bancoLogos[transacaoSelecionada.nomeBanco?.toUpperCase()]}
                      <span>{transacaoSelecionada.nomeBanco || 'Banco'}</span>
                    </div>
                    <span className="sheet-account-sub">Ag 0312 • CC 44321-2</span>
                  </div>
                </div>

                <div className="sheet-detail-row">
                  <span className="sheet-detail-label">Categoria</span>
                  <div className="sheet-category-badge">
                    <span className="material-symbols-outlined">
                      {categoriaLogos[transacaoSelecionada.categoria?.toUpperCase()] || 'label'}
                    </span>
                    <span>{transacaoSelecionada.categoria}</span>
                  </div>
                </div>

                <div className="sheet-detail-row">
                  <span className="sheet-detail-label">Tipo</span>
                  <span className="sheet-detail-value">
                    {transacaoSelecionada.categoria === 'RENDA' ? 'Crédito' : 'Débito'}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="sheet-footer">
              <button className="sheet-btn-close" onClick={() => setTransacaoSelecionada(null)}>
                Fechar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TransactionsPage
