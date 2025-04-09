import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/NavbarSection/Navbar';
import Footer from './Components/FooterSection/Footer';
import Home from './Components/HomeSection/Home';
import Categories from './Components/CategoriesSection/Categories';
import Login from './Components/LoginSection/Login';
import Register from './Components/LoginSection/Register';
import WordPressPage from './Components/CategoriesSection/WordPress';
import PHPPage from './Components/CategoriesSection/PHP';
import Mobile from './Components/CategoriesSection/MobileAppDevelopment';
import HTMLPage from './Components/CategoriesSection/HTML';
import PluginsPage from './Components/CategoriesSection/Plugins';
import JavaScriptPage from './Components/CategoriesSection/JavaScript';
import AdminLayout from './Components/AdminPanelSection/AdminDashboard/AdminLayout';
import AddProduct from './Components/AdminPanelSection/AdminDashboard/AddProducts';
import ProductList from './Components/AdminPanelSection/AdminDashboard/ProductsList';
import TransactionHistory from './Components/AdminPanelSection/AdminDashboard/TransactionHistory';
import UserManagement from './Components/AdminPanelSection/AdminDashboard/UserManagment'; // Note: 'Managment' without 'e'
import Adminlogin from './Components/Adminlogin/Adminlogin';
import ProductPreview from './Components/HomeSection/ProductPreview';
import CartList from './Components/HomeSection/CartList';
import CheckoutPage from './Components/HomeSection/CheckoutPage';
import { Toaster } from 'react-hot-toast';
import AddCategory from './Components/AdminPanelSection/AdminDashboard/AddCategory';
import RegisterDetails from './Components/ProfileSection/RegisterDetails';
import PurchaseProduct from './Components/ProfileSection/PurchaseProduct';
import PaymentHistory from './Components/ProfileSection/PaymentHistory';
import RouteWrapper from './Components/LoaderSection/RouteWrapper';
import ForgetPassword from './Components/LoginSection/ForgetPassword';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Authentication check function
  const isAuthenticated = () => {
    const token = localStorage.getItem('adminToken');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    return token && isAdmin;
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('isAdmin');
      return <Navigate to="/admin-login" replace />;
    }
    return children;
  };

  return (
    <div className="App flex flex-col min-h-screen overflow-x-hidden">
      <Toaster position="top-right" />
      <RouteWrapper>
        <Routes>
          {/* Admin Login Route */}
          <Route 
            path="/admin-login" 
            element={
              isAuthenticated() ? 
                <Navigate to="/admin/dashboard" replace /> : 
                <Adminlogin />
            } 
          />
          
          {/* Protected Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<div>Dashboard Content</div>} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<ProductList />} />
            <Route path="transactions" element={<TransactionHistory />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="payment-settings" element={<div>Payment Settings</div>} />
            <Route path="add-category" element={<AddCategory />} />
          </Route>

          {/* Product Preview Route - Without Footer */}
          <Route
            path="/product/:id"
            element={
              <>
                <Navbar />
                <div className="flex-grow">
                  <ProductPreview />
                </div>
              </>
            }
          />

          {/* Checkout Route */}
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <div className="flex-grow">
                  <CheckoutPage 
                    cartItems={cartItems} 
                    calculateTotal={calculateTotal}
                  />
                </div>
              </>
            }
          />

          {/* Cart Route */}
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <div className="flex-grow">
                  <CartList 
                    cartItems={cartItems} 
                    setCartItems={setCartItems} 
                    calculateTotal={calculateTotal}
                  />
                </div>
              </>
            }
          />

          {/* Public Routes - With Footer */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="flex-grow pt-16 overflow-x-hidden">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                    <Route path="/wordpress" element={<WordPressPage />} />
                    <Route path="/php" element={<PHPPage />} />
                    <Route path="/mobile" element={<Mobile />} />
                    <Route path="/html" element={<HTMLPage />} />
                    <Route path="/plugins" element={<PluginsPage />} />
                    <Route path="/javascript" element={<JavaScriptPage />} />
                    <Route path="/profile/details" element={<RegisterDetails />} />
                    <Route path="/profile/purchases" element={<PurchaseProduct />} />
                    <Route path="/profile/payment-history" element={<PaymentHistory />} />
                  </Routes>   
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </RouteWrapper>
    </div>
  );
}

export default App;
