import '../styles/pages/TransactionsPage.css'
import '../styles/pages/DashboardPage.css'

function TransactionsPage() {
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

      <p className="results-count">Exibindo 1–19 de 31 transações</p>

      {/* Table */}
      <div className="full-transactions-card">
        <div className="full-table-scroll">
          <table className="full-transactions-table">
            <thead>
              <tr>
                <th style={{ width: '80px' }}>Data</th>
                <th>Descrição</th>
                <th style={{ width: '90px' }}>Conta</th>
                <th style={{ width: '120px' }}>Categoria</th>
                <th style={{ width: '120px', textAlign: 'right' }}>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-date">05/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-positive"><span className="material-symbols-outlined">payments</span></div><span className="td-desc-text">Salário — Empresa XYZ</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip category-chip-positive">Renda</span></td>
                <td className="td-value td-value-positive">+R$ 5.200,00</td>
              </tr>
              <tr>
                <td className="td-date">05/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">home</span></div><span className="td-desc-text">Aluguel</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Moradia</span></td>
                <td className="td-value">-R$ 1.500,00</td>
              </tr>
              <tr>
                <td className="td-date">07/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">bolt</span></div><span className="td-desc-text">Conta de luz — Enel</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Moradia</span></td>
                <td className="td-value">-R$ 187,40</td>
              </tr>
              <tr>
                <td className="td-date">08/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">medical_services</span></div><span className="td-desc-text">Farmácia Drogasil</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Saúde</span></td>
                <td className="td-value">-R$ 43,90</td>
              </tr>
              <tr>
                <td className="td-date">10/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">live_tv</span></div><span className="td-desc-text">Netflix</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Lazer</span></td>
                <td className="td-value">-R$ 55,90</td>
              </tr>
              <tr>
                <td className="td-date">10/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">music_note</span></div><span className="td-desc-text">Spotify</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Lazer</span></td>
                <td className="td-value">-R$ 21,90</td>
              </tr>
              <tr>
                <td className="td-date">12/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">shopping_cart</span></div><span className="td-desc-text">Supermercado Carrefour</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Alimentação</span></td>
                <td className="td-value">-R$ 347,80</td>
              </tr>
              <tr>
                <td className="td-date">14/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">directions_car</span></div><span className="td-desc-text">Uber</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Transporte</span></td>
                <td className="td-value">-R$ 28,50</td>
              </tr>
              <tr>
                <td className="td-date">15/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">wifi</span></div><span className="td-desc-text">Internet — Vivo Fibra</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Moradia</span></td>
                <td className="td-value">-R$ 99,90</td>
              </tr>
              <tr>
                <td className="td-date">17/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">restaurant</span></div><span className="td-desc-text">iFood</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Alimentação</span></td>
                <td className="td-value">-R$ 67,90</td>
              </tr>
              <tr>
                <td className="td-date">18/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">medical_services</span></div><span className="td-desc-text">Farmácia São João</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Saúde</span></td>
                <td className="td-value">-R$ 87,00</td>
              </tr>
              <tr>
                <td className="td-date">20/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">local_gas_station</span></div><span className="td-desc-text">Posto de Gasolina BR</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Transporte</span></td>
                <td className="td-value">-R$ 180,00</td>
              </tr>
              <tr>
                <td className="td-date">21/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">shopping_bag</span></div><span className="td-desc-text">Amazon Prime</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Lazer</span></td>
                <td className="td-value">-R$ 19,90</td>
              </tr>
              <tr>
                <td className="td-date">22/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">directions_car</span></div><span className="td-desc-text">Uber</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Transporte</span></td>
                <td className="td-value">-R$ 34,90</td>
              </tr>
              <tr>
                <td className="td-date">24/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">shopping_cart</span></div><span className="td-desc-text">Supermercado Extra</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Alimentação</span></td>
                <td className="td-value">-R$ 312,50</td>
              </tr>
              <tr>
                <td className="td-date">25/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">bakery_dining</span></div><span className="td-desc-text">Padaria Brasileira</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Alimentação</span></td>
                <td className="td-value">-R$ 28,50</td>
              </tr>
              <tr>
                <td className="td-date">25/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">local_gas_station</span></div><span className="td-desc-text">Posto Shell</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Transporte</span></td>
                <td className="td-value">-R$ 95,00</td>
              </tr>
              <tr>
                <td className="td-date">26/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">coffee</span></div><span className="td-desc-text">Starbucks</span></div></td>
                <td className="td-account">Itaú</td>
                <td><span className="category-chip">Alimentação</span></td>
                <td className="td-value">-R$ 32,50</td>
              </tr>
              <tr>
                <td className="td-date">26/06</td>
                <td><div className="td-description"><div className="td-desc-icon td-desc-icon-default"><span className="material-symbols-outlined">music_note</span></div><span className="td-desc-text">Spotify</span></div></td>
                <td className="td-account">Nubank</td>
                <td><span className="category-chip">Lazer</span></td>
                <td className="td-value">-R$ 21,90</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="pagination">
          <span className="pagination-info">Exibindo 1–19 de 31 transações</span>
          <div className="pagination-buttons">
            <button className="pagination-btn pagination-btn-disabled">← Anterior</button>
            <button className="pagination-btn pagination-btn-active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">Próxima →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionsPage
