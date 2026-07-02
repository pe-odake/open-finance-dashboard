import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import AccountsPage from './pages/AccountsPage.jsx'
import TransactionsPage from './pages/TransactionsPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'
import ConsentsPage from './pages/ConsentsPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

function App() {
  return (
    <Routes>
      {/* Public routes - no layout */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected routes - with sidebar + header layout */}
      <Route path="/dashboard" element={<AppLayout activePage="dashboard"><DashboardPage /></AppLayout>} />
      <Route path="/accounts" element={<AppLayout activePage="accounts"><AccountsPage /></AppLayout>} />
      <Route path="/transactions" element={<AppLayout activePage="transactions"><TransactionsPage /></AppLayout>} />
      <Route path="/analysis" element={<AppLayout activePage="analysis"><AnalysisPage /></AppLayout>} />
      <Route path="/consents" element={<AppLayout activePage="consents"><ConsentsPage /></AppLayout>} />
      <Route path="/settings" element={<AppLayout activePage="settings"><SettingsPage /></AppLayout>} />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
