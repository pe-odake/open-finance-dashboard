import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import MobileBottomNav from './MobileBottomNav.jsx'
import '../../styles/components/layout/AppLayout.css'

function AppLayout({ activePage, children }) {
  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} />
      <div className="app-layout-main">
        <Header />
        <main className="app-layout-content">
          {children}
        </main>
        <MobileBottomNav activePage={activePage} />
      </div>
    </div>
  )
}

export default AppLayout
