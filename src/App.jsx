import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext.jsx'
import AppLayout from './components/layout/AppLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import AccountsPage from './pages/AccountsPage.jsx'
import TransactionsPage from './pages/TransactionsPage.jsx'
import AnalysisPage from './pages/AnalysisPage.jsx'
import ConsentsPage from './pages/ConsentsPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}

function App() {
  return (
    <Routes>
      {/* AUTH */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={
        <PrivateRoute>
          <AppLayout activePage="dashboard"><DashboardPage /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/accounts" element={
        <PrivateRoute>
          <AppLayout activePage="accounts"><AccountsPage /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/transactions" element={
        <PrivateRoute>
          <AppLayout activePage="transactions"><TransactionsPage /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/analysis" element={
        <PrivateRoute>
          <AppLayout activePage="analysis"><AnalysisPage /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/consents" element={
        <PrivateRoute>
          <AppLayout activePage="consents"><ConsentsPage /></AppLayout>
        </PrivateRoute>
      } />
      <Route path="/settings" element={
        <PrivateRoute>
          <AppLayout activePage="settings"><SettingsPage /></AppLayout>
        </PrivateRoute>
      } />

      {/* PADRAO */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App

