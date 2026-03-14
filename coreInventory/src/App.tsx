import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/Dashboard'
import ProductsPage from './pages/Products'
import ProfilePage from './pages/Profile'
import SettingsPage from './pages/Settings'
import CategoriesPage from './pages/Categories'
import ReceiptsPage from './pages/Receipts'
import DeliveriesPage from './pages/Deliveries'
import AdjustmentsPage from './pages/Adjustments'
import HistoryPage from './pages/History'
import WarehousesPage from './pages/Warehouses'
import LocationsPage from './pages/Locations'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/categories" element={<CategoriesPage />} />
          <Route path="/operations/receipts" element={<ReceiptsPage />} />
          <Route path="/operations/deliveries" element={<DeliveriesPage />} />
          <Route path="/operations/adjustments" element={<AdjustmentsPage />} />
          <Route path="/operations/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/warehouses" element={<WarehousesPage />} />
          <Route path="/settings/locations" element={<LocationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App