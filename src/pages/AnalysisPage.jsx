import '../styles/pages/AnalysisPage.css'

function AnalysisPage() {
  /* Donut chart math: circumference = 2 * PI * 70 ≈ 439.82 */
  const C = 439.82
  /* Segments: Alimentação 35%, Transporte 25%, Lazer 20%, Saúde 15%, Outros 5% */
  const seg1 = C * 0.35  /* 153.94 */
  const seg2 = C * 0.25  /* 109.96 */
  const seg3 = C * 0.20  /* 87.96  */
  const seg4 = C * 0.15  /* 65.97  */
  const seg5 = C * 0.05  /* 21.99  */

  return (
    <div className="analysis-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-text">
          <h1>Análise de Gastos</h1>
          <p>Visão detalhada do seu comportamento financeiro.</p>
        </div>
        <div className="month-selector">
          <span className="material-symbols-outlined">calendar_today</span>
          <span>junho 2025</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>

      {/* Insight */}
      <div className="insight-card">
        <div className="insight-icon">
          <span className="material-symbols-outlined filled">lightbulb</span>
        </div>
        <div>
          <div className="insight-title">Insight Automático</div>
          <p className="insight-text">
            Seus gastos com <strong>Transporte</strong> estão 15% menores em comparação com o mês anterior. Ótimo trabalho em manter o orçamento!
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="analysis-charts-grid">
        {/* Donut Chart */}
        <div className="donut-card">
          <h3 className="card-title">Distribuição por Categoria</h3>
          <div className="donut-wrapper">
            <svg width="200" height="200" viewBox="0 0 200 200">
              {/* Alimentação 35% */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#185fa5" strokeWidth="35"
                strokeDasharray={`${seg1} ${C - seg1}`}
                strokeDashoffset="0"
                transform="rotate(-90 100 100)" />
              {/* Transporte 25% */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#0F6E56" strokeWidth="35"
                strokeDasharray={`${seg2} ${C - seg2}`}
                strokeDashoffset={`${-seg1}`}
                transform="rotate(-90 100 100)" />
              {/* Lazer 20% */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#BA7517" strokeWidth="35"
                strokeDasharray={`${seg3} ${C - seg3}`}
                strokeDashoffset={`${-(seg1 + seg2)}`}
                transform="rotate(-90 100 100)" />
              {/* Saúde 15% */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#5f5e5a" strokeWidth="35"
                strokeDasharray={`${seg4} ${C - seg4}`}
                strokeDashoffset={`${-(seg1 + seg2 + seg3)}`}
                transform="rotate(-90 100 100)" />
              {/* Outros 5% */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="#D3D1C7" strokeWidth="35"
                strokeDasharray={`${seg5} ${C - seg5}`}
                strokeDashoffset={`${-(seg1 + seg2 + seg3 + seg4)}`}
                transform="rotate(-90 100 100)" />
            </svg>
            <div className="donut-center-text">
              <div className="donut-center-value">R$ 4.780,00</div>
              <div className="donut-center-label">Total</div>
            </div>
          </div>
        </div>

        {/* Detail Bars */}
        <div className="detail-card">
          <h3 className="card-title">Detalhamento</h3>
          <div className="detail-list">
            <div className="detail-item">
              <div className="detail-item-header">
                <div className="detail-item-name">
                  <div className="detail-dot" style={{ backgroundColor: '#185fa5' }}></div>
                  <span className="detail-label">Alimentação</span>
                </div>
                <span className="detail-percent">35%</span>
              </div>
              <div className="detail-bar-track">
                <div className="detail-bar-fill" style={{ width: '100%', backgroundColor: '#185fa5' }}></div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-item-header">
                <div className="detail-item-name">
                  <div className="detail-dot" style={{ backgroundColor: '#0F6E56' }}></div>
                  <span className="detail-label">Transporte</span>
                </div>
                <span className="detail-percent">25%</span>
              </div>
              <div className="detail-bar-track">
                <div className="detail-bar-fill" style={{ width: '71%', backgroundColor: '#0F6E56' }}></div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-item-header">
                <div className="detail-item-name">
                  <div className="detail-dot" style={{ backgroundColor: '#BA7517' }}></div>
                  <span className="detail-label">Lazer</span>
                </div>
                <span className="detail-percent">20%</span>
              </div>
              <div className="detail-bar-track">
                <div className="detail-bar-fill" style={{ width: '57%', backgroundColor: '#BA7517' }}></div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-item-header">
                <div className="detail-item-name">
                  <div className="detail-dot" style={{ backgroundColor: '#5f5e5a' }}></div>
                  <span className="detail-label">Saúde</span>
                </div>
                <span className="detail-percent">15%</span>
              </div>
              <div className="detail-bar-track">
                <div className="detail-bar-fill" style={{ width: '43%', backgroundColor: '#5f5e5a' }}></div>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-item-header">
                <div className="detail-item-name">
                  <div className="detail-dot" style={{ backgroundColor: '#D3D1C7' }}></div>
                  <span className="detail-label">Outros</span>
                </div>
                <span className="detail-percent">5%</span>
              </div>
              <div className="detail-bar-track">
                <div className="detail-bar-fill" style={{ width: '14%', backgroundColor: '#D3D1C7' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart - Entradas vs Saídas */}
      <div className="bar-chart-card">
        <div className="bar-chart-header">
          <h3 className="card-title">Entradas vs Saídas — últimos 6 meses</h3>
          <div className="bar-chart-legend">
            <div className="legend-item">
              <div className="legend-dot" style={{ backgroundColor: 'var(--color-positive)' }}></div>
              <span>Entradas</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot" style={{ backgroundColor: 'var(--color-negative)' }}></div>
              <span>Saídas</span>
            </div>
          </div>
        </div>
        <div className="bar-chart-wrapper">
          <svg viewBox="0 0 600 250" style={{ width: '100%', height: 'auto', minHeight: '220px' }}>
            {/* Max value is 5200, chart height is 200, bottom at y=220 */}
            {/* Jan: E=5200 S=4990 */}
            <rect x="30" y="20" width="30" height="200" rx="3" fill="var(--color-positive)" opacity="0.85" />
            <rect x="65" y="28" width="30" height="192" rx="3" fill="var(--color-negative)" opacity="0.85" />
            <text x="62" y="245" textAnchor="middle" fontSize="11" fill="var(--color-secondary)">Jan</text>

            {/* Fev: E=5200 S=4510 */}
            <rect x="130" y="20" width="30" height="200" rx="3" fill="var(--color-positive)" opacity="0.85" />
            <rect x="165" y="46" width="30" height="174" rx="3" fill="var(--color-negative)" opacity="0.85" />
            <text x="162" y="245" textAnchor="middle" fontSize="11" fill="var(--color-secondary)">Fev</text>

            {/* Mar: E=5200 S=4720 */}
            <rect x="230" y="20" width="30" height="200" rx="3" fill="var(--color-positive)" opacity="0.85" />
            <rect x="265" y="38" width="30" height="182" rx="3" fill="var(--color-negative)" opacity="0.85" />
            <text x="262" y="245" textAnchor="middle" fontSize="11" fill="var(--color-secondary)">Mar</text>

            {/* Abr: E=5200 S=4350 */}
            <rect x="330" y="20" width="30" height="200" rx="3" fill="var(--color-positive)" opacity="0.85" />
            <rect x="365" y="53" width="30" height="167" rx="3" fill="var(--color-negative)" opacity="0.85" />
            <text x="362" y="245" textAnchor="middle" fontSize="11" fill="var(--color-secondary)">Abr</text>

            {/* Mai: E=5200 S=4630 */}
            <rect x="430" y="20" width="30" height="200" rx="3" fill="var(--color-positive)" opacity="0.85" />
            <rect x="465" y="42" width="30" height="178" rx="3" fill="var(--color-negative)" opacity="0.85" />
            <text x="462" y="245" textAnchor="middle" fontSize="11" fill="var(--color-secondary)">Mai</text>

            {/* Jun: E=5200 S=4780 */}
            <rect x="530" y="20" width="30" height="200" rx="3" fill="var(--color-positive)" opacity="0.85" />
            <rect x="565" y="36" width="30" height="184" rx="3" fill="var(--color-negative)" opacity="0.85" />
            <text x="562" y="245" textAnchor="middle" fontSize="11" fill="var(--color-secondary)">Jun</text>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default AnalysisPage
