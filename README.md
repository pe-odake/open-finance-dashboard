# Open Finance Dashboard — Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

Interface web para visualização e gestão de dados financeiros consolidados, simulando o ecossistema de Open Finance brasileiro. O usuário conecta múltiplas contas bancárias fictícias e acompanha saldo, transações e gastos em um painel unificado.

---

## Stack

| Tecnologia | Uso |
|---|---|
| **React 19** | Biblioteca principal de UI |
| **JavaScript (ES2022)** | Linguagem — sem TypeScript |
| **React Router DOM 7** | Roteamento de páginas (SPA) |
| **Axios 1.x** | Cliente HTTP com interceptors para JWT |
| **Vite 8** | Bundler e servidor de desenvolvimento |
| **react-bancos** | Logos de bancos brasileiros |
| **oxlint** | Linter rápido |

---

## Funcionalidades

### ✅ Implementadas

#### Autenticação
- Tela de login com e-mail e senha
- Tela de cadastro de novo usuário
- Armazenamento do JWT em `localStorage`
- Redirecionamento automático para login em rotas protegidas

#### Contas
- Listagem de todas as contas conectadas com nome do banco, tipo e saldo
- Botão para adicionar nova conta fictícia (simulando o fluxo de consentimento Open Finance)
- Logos reais dos bancos brasileiros via `react-bancos`

#### Transações
- Tabela paginada com todas as transações de todas as contas
- Paginação server-side com controle de página
- Cada linha exibe: nome da transação, data, conta de origem, valor e categoria
- Valores negativos em coral, positivos em teal
- Categorias exibidas como tags (Alimentação, Transporte, Lazer, Saúde, Renda, Mercado)
- Side sheet com detalhes da transação ao clicar em uma linha

### 🚧 Em desenvolvimento

#### Dashboard (visão geral)
- Saudação personalizada com nome do usuário
- Patrimônio consolidado somando todas as contas conectadas
- Cards de métricas: saldo total, entradas e saídas do mês corrente
- Lista de contas com saldo individual de cada uma
- Gráfico de linha com evolução patrimonial dos últimos 6 meses
- Banner de notificação de sincronização

> UI mockada com dados estáticos — integração com API pendente.

#### Análise de gastos
- Gráfico donut por categoria do mês selecionado
- Barras de progresso por categoria mostrando proporção do gasto total
- Comparativo mês a mês: gráfico de barras com entradas vs saídas

> UI mockada com dados estáticos — integração com API pendente.

#### Consentimentos
- Lista de todos os consentimentos ativos e revogados
- Informações de cada consentimento: banco, permissões concedidas e data de expiração
- Botão para revogar um consentimento ativo
- Histórico de consentimentos revogados

> UI mockada com dados estáticos — integração com API pendente.

#### Filtros de transações
- Busca por texto, conta, categoria e período (mês/ano)

> Elementos visuais presentes na UI — lógica de filtragem pendente.

#### Renovação de token (refresh token)
- Renovação automática do JWT antes de expirar
- Redirecionamento para login ao expirar a sessão

#### Notificações em tempo real
- Conexão SSE (Server-Sent Events) com o backend
- Banner de notificação quando a sincronização automática é concluída
- Reconexão automática ao SSE em caso de queda

#### Download de extrato
- Botão na tela de transações para solicitar geração de extrato
- Requisição assíncrona ao backend (processado em background)
- Notificação quando o arquivo está pronto, com link de download

#### Configurações
- Perfil editável lendo dados do usuário logado
- Toggles funcionais para sincronização e notificações
- Logout com limpeza de sessão

---

## Arquitetura

```
┌──────────────┐     Axios + JWT      ┌──────────────┐     Spring Boot     ┌──────────────┐
│  React SPA   │ ──────────────────── │   API REST   │ ──────────────────  │  PostgreSQL  │
│ localhost:5173│                      │ localhost:8080│                     │              │
└──────────────┘                      └──────────────┘                     └──────────────┘
```

O frontend é uma SPA React que consome a API REST do backend Spring Boot. A autenticação é feita via JWT Bearer Token. O Axios é configurado com interceptors que anexam o token automaticamente em todas as requisições (exceto rotas `/auth`).

---

## Como rodar localmente

**Pré-requisitos:** Node.js 20+, backend rodando em `http://localhost:8080`

```bash
# Clonar o repositório
git clone https://github.com/pe-odake/open-finance-dashboard.git
cd open-finance-dashboard

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173`

```bash
# Build de produção
npm run build
```

### Variáveis de ambiente

| Variável | Descrição | Exemplo |
|---|---|---|
| `VITE_PROD` | Flag para ambiente de produção | `true` ou `false` |
| `VITE_URL_DEPLOY` | URL da API em produção | `https://api.exemplo.com` |
| `VITE_URL_LOCAL` | URL da API em desenvolvimento | `http://localhost:8080` |

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o oxlint |

---

## Estrutura de pastas

```
open-finance-dashboard/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx        # Wrapper com Sidebar, Header e conteúdo
│   │   │   ├── Header.jsx           # Cabeçalho da aplicação
│   │   │   ├── MobileBottomNav.jsx  # Navegação inferior (mobile)
│   │   │   └── Sidebar.jsx          # Navegação lateral (desktop)
│   │   ├── AccountCard.jsx          # Card de exibição de conta
│   │   └── AddAccountModal.jsx      # Modal de inserção de conta
│   ├── contexts/
│   │   └── AuthContext.jsx          # Contexto global de autenticação
│   ├── pages/
│   │   ├── AccountsPage.jsx
│   │   ├── AnalysisPage.jsx
│   │   ├── ConsentsPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── TransactionsPage.jsx
│   ├── services/
│   │   ├── api.js                   # Configuração base do Axios
│   │   ├── auth.js                  # Requisições de autenticação
│   │   ├── contas.js                # Requisições de contas
│   │   └── transacoes.js            # Requisições de transações
│   ├── styles/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── AppLayout.css
│   │   │   │   ├── Header.css
│   │   │   │   ├── MobileBottomNav.css
│   │   │   │   └── Sidebar.css
│   │   │   ├── AccountCard.css
│   │   │   └── AddAccountModal.css
│   │   ├── pages/
│   │   │   ├── AccountsPage.css
│   │   │   ├── AnalysisPage.css
│   │   │   ├── ConsentsPage.css
│   │   │   ├── DashboardPage.css
│   │   │   ├── LoginPage.css
│   │   │   ├── SettingsPage.css
│   │   │   └── TransactionsPage.css
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx                    # Definição das rotas e componente principal
│   └── main.jsx                   # Ponto de entrada da aplicação
├── .env                           # Variáveis de ambiente
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Roadmap

- [x] Autenticação (login e cadastro)
- [x] Listagem e criação de contas
- [x] Tabela paginada de transações com side sheet de detalhes
- [ ] Dashboard com dados reais da API
- [ ] Análise de gastos integrada ao backend
- [ ] Gerenciamento de consentimentos funcional
- [ ] Filtros funcionais na tela de transações
- [ ] Renovação automática de token (refresh token)
- [ ] Notificações em tempo real (SSE)
- [ ] Download de extratos
- [ ] Configurações de perfil editáveis
- [ ] Sincronização manual e automática de contas

---

## Autor

**Pedro Odake**
[GitHub](https://github.com/pe-odake) · [LinkedIn](https://linkedin.com/in/pedro-odake/) · [pedroodake.com](https://pedroodake.com)