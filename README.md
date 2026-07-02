# Open Finance Dashboard — Frontend

Interface web para visualização e gestão de dados financeiros consolidados, simulando o ecossistema de Open Finance brasileiro. O usuário conecta múltiplas contas bancárias fictícias e acompanha saldo, transações e gastos em um painel unificado e em tempo real.

---

## Para que serve

O frontend é a camada de apresentação do Open Finance Dashboard. Ele consome a API REST do backend (Spring Boot) e exibe dados financeiros de múltiplas contas de forma centralizada. O objetivo é simular a experiência de um agregador financeiro no modelo Open Finance do Banco Central do Brasil, onde o usuário tem controle total sobre quais dados compartilha e pode revogar acessos a qualquer momento.

---

## Funcionalidades

### Autenticação
- Tela de login com e-mail e senha
- Tela de cadastro de novo usuário
- Armazenamento do JWT em memória (sem localStorage) para maior segurança
- Renovação automática de token via refresh token
- Redirecionamento para login ao expirar a sessão

### Dashboard (visão geral)
- Saudação personalizada com nome do usuário
- Patrimônio consolidado somando todas as contas conectadas
- Cards de métricas: saldo total, entradas e saídas do mês corrente
- Lista de contas com saldo individual de cada uma
- Gráfico de linha com evolução patrimonial dos últimos 6 meses (Recharts LineChart)
- Indicador de variação mensal (positivo em teal, negativo em coral)
- Banner de notificação em tempo real via SSE quando a sincronização automática é concluída

### Contas
- Listagem de todas as contas conectadas com nome do banco, tipo e saldo
- Botão para adicionar nova conta fictícia (simulando o fluxo de consentimento Open Finance)
- Botão de sincronização manual por conta
- Status de cada conta (sincronizado, erro, aguardando)

### Transações
- Tabela paginada com todas as transações de todas as contas
- Paginação server-side via TanStack Query (requisição ao backend por página)
- Filtros combinados: busca por texto, conta, categoria e período (mês/ano)
- Cada linha exibe: nome da transação, data, conta de origem, valor e categoria
- Valores negativos em coral, positivos em teal
- Categorias exibidas como tags (Alimentação, Transporte, Lazer, Saúde, Renda, Outros)

### Análise de gastos
- Gráfico de pizza por categoria do mês selecionado (Recharts PieChart)
- Barras de progresso por categoria mostrando proporção do gasto total
- Comparativo mês a mês: gráfico de barras agrupadas com entradas vs saídas (Recharts BarChart)
- Seletor de mês para navegar entre períodos

### Consentimentos
- Lista de todos os consentimentos ativos e revogados
- Informações de cada consentimento: banco, permissões concedidas (leitura de saldo, leitura de transações, leitura de fatura) e data de expiração
- Botão para revogar um consentimento ativo (com modal de confirmação)
- Histórico de consentimentos revogados com data de revogação

### Notificações em tempo real
- Conexão SSE (Server-Sent Events) com o backend ao carregar o app
- Banner não obstrusivo no topo da tela quando a sincronização automática é concluída
- Banner de erro quando uma sincronização falha para alguma conta
- Reconexão automática ao SSE em caso de queda

### Download de extrato
- Botão na tela de transações para solicitar geração de extrato
- Requisição assíncrona ao backend (processado em background)
- Notificação quando o arquivo está pronto, com link de download (PDF ou CSV)

---

## Design

| Atributo | Decisão |
|---|---|
| Fonte | Inter (Google Fonts) — display 28px, body 14px, mono para valores |
| Cor primária | Azul institucional `#185FA5` |
| Cor positiva | Teal `#0F6E56` |
| Cor negativa | Coral `#993C1D` |
| Fundo | Cinza frio `#FAFAF9` |
| Cards | Branco `#FFFFFF` com borda `0.5px` |
| Breakpoints | Mobile `≤767px`, Tablet `768–1023px`, Desktop `≥1024px` |
| Navegação desktop | Sidebar lateral fixa de 72px com ícones |
| Navegação mobile | Bottom navigation bar com 5 ícones |
| Navegação tablet | Sidebar colapsada (ícones, sem labels) |

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | Biblioteca principal de UI |
| JavaScript (ES2022) | — | Sem TypeScript, conforme decisão do projeto |
| React Router DOM | 7 | Roteamento de páginas (SPA) |
| TanStack Query | 5 | Gerenciamento de estado servidor, cache e paginação |
| Recharts | 2 | Gráficos (linha, pizza, barras) |
| Axios | 1.x | Cliente HTTP com interceptors para JWT |
| React Hook Form | 7 | Formulários de login e cadastro |
| Vite | 8 | Bundler e servidor de desenvolvimento |

---

## Estrutura de pastas

```
open-finance-frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── api/
│   │   ├── axiosInstance.js       # Axios configurado com interceptors JWT
│   │   ├── authApi.js             # Login, cadastro, refresh token
│   │   ├── accountsApi.js         # CRUD de contas
│   │   ├── transactionsApi.js     # Listagem e filtros de transações
│   │   ├── consentApi.js          # Listagem e revogação de consentimentos
│   │   └── reportsApi.js          # Solicitação e download de extratos
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx        # Navegação lateral (desktop/tablet)
│   │   │   ├── BottomNav.jsx      # Navegação inferior (mobile)
│   │   │   └── AppLayout.jsx      # Wrapper com Sidebar + conteúdo
│   │   ├── ui/
│   │   │   ├── MetricCard.jsx     # Card de métrica (label + valor)
│   │   │   ├── StatusChip.jsx     # Chip colorido de status
│   │   │   ├── CategoryTag.jsx    # Tag de categoria de transação
│   │   │   ├── SyncBanner.jsx     # Banner de notificação SSE
│   │   │   ├── Modal.jsx          # Modal reutilizável
│   │   │   └── EmptyState.jsx     # Estado vazio para listas
│   │   ├── charts/
│   │   │   ├── PatrimonyLineChart.jsx   # Evolução patrimonial
│   │   │   ├── CategoryPieChart.jsx     # Gastos por categoria
│   │   │   └── MonthlyBarChart.jsx      # Entradas vs saídas
│   │   └── transactions/
│   │       ├── TransactionTable.jsx     # Tabela paginada
│   │       └── TransactionFilters.jsx   # Filtros combinados
│   ├── hooks/
│   │   ├── useAuth.js             # Contexto e hook de autenticação
│   │   ├── useSSE.js              # Hook para conexão Server-Sent Events
│   │   └── usePagination.js       # Hook de controle de paginação
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── AccountsPage.jsx
│   │   ├── TransactionsPage.jsx
│   │   ├── AnalysisPage.jsx
│   │   ├── ConsentsPage.jsx
│   │   └── SettingsPage.jsx
│   ├── context/
│   │   └── AuthContext.jsx        # Contexto global de autenticação
│   ├── utils/
│   │   ├── formatCurrency.js      # Formata valores para BRL
│   │   └── formatDate.js          # Formata datas em pt-BR
│   ├── App.jsx                    # Rotas e providers globais
│   └── main.jsx                   # Ponto de entrada
├── .env                           # VITE_API_BASE_URL
├── vite.config.js
└── package.json
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js 20+, backend rodando em `http://localhost:8080`

```bash
# Clonar o repositório
git clone https://github.com/pe-odake/open-finance-frontend.git
cd open-finance-frontend

# Instalar dependências
npm install

# Configurar variável de ambiente
cp .env.example .env
# Editar .env: VITE_API_BASE_URL=http://localhost:8080

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`

```bash
# Build de produção
npm run build
```

---

## Variáveis de ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `VITE_API_BASE_URL` | URL base da API REST do backend | `http://localhost:8080` |

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint |

---

## Autor

**Pedro Odake**
[GitHub](https://github.com/pe-odake) · [LinkedIn](https://linkedin.com/in/pedro-odake/) · [pedroodake.com](https://pedroodake.com)
