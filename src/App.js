import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/FooterSection/Footer';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Login from './Components/Login';
import Register from './Components/Register';
import WordPressPage from './Components/CategoriesSection/WordPress';
import PHPPage from './Components/CategoriesSection/PHP';
import Mobile from './Components/CategoriesSection/MobileAppDevelopment';
import HTMLPage from './Components/CategoriesSection/HTML';
import PluginsPage from './Components/CategoriesSection/Plugins';
import JavaScriptPage from './Components/CategoriesSection/JavaScript';
import AdminLayout from './Components/Dashboard/AdminDashboard/AdminLayout';
import AddProduct from './Components/Dashboard/AdminDashboard/AddProducts';
import ProductList from './Components/Dashboard/AdminDashboard/ProductsList';
import TransactionHistory from './Components/Dashboard/AdminDashboard/TransactionHistory';
import UserManagement from './Components/Dashboard/AdminDashboard/UserManagment';

function App() {
  // This should come from your auth context/state management
  const isAuthenticated = true; // Temporarily set to true for testing
  const isAdmin = true; // Temporarily set to true for testing

  return (
    <div className="App flex flex-col min-h-screen">
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            isAuthenticated && isAdmin ? (
              <AdminLayout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<div>Dashboard Content</div>} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<ProductList />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="payment-settings" element={<div>Payment Settings</div>} />
        </Route>

        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="flex-grow pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/wordpress" element={<WordPressPage />} />
                  <Route path="/php" element={<PHPPage />} />
                  <Route path="/mobile" element={<Mobile />} />
                  <Route path="/html" element={<HTMLPage />} />
                  <Route path="/plugins" element={<PluginsPage />} />
                  <Route path="/javascript" element={<JavaScriptPage />} />
                </Routes>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
