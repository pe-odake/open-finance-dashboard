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
  const { isAuthenticated, loading } = useAuth()

  if (loading) return null
  if (!isAuthenticated) return <Navigate to="/login" replace />

  return children
}

function SmartRedirect() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return null

  return isAuthenticated
    ? <Navigate to="/dashboard" replace />
    : <Navigate to="/login" replace />
}

const privateRoutes = [
  { path: '/dashboard', page: 'dashboard', element: <DashboardPage /> },
  { path: '/accounts', page: 'accounts', element: <AccountsPage /> },
  { path: '/transactions', page: 'transactions', element: <TransactionsPage /> },
  { path: '/analysis', page: 'analysis', element: <AnalysisPage /> },
  { path: '/consents', page: 'consents', element: <ConsentsPage /> },
  { path: '/settings', page: 'settings', element: <SettingsPage /> },
]

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {privateRoutes.map(({ path, page, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute>
              <AppLayout activePage={page}>{element}</AppLayout>
            </PrivateRoute>
          }
        />
      ))}

      <Route path="*" element={<SmartRedirect />} />
    </Routes>
  )
}

export default App
