import './App.css';
import React, { useState } from 'react';
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
import Adminlogin from './Components/Adminlogin/Adminlogin';
import ProductPreview from './Components/ProductPreview';
import CartList from './Components/CartList';
import CheckoutPage from './Components/CheckoutPage';
import { Toaster } from 'react-hot-toast';

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
    <div className="App flex flex-col min-h-screen">
      <Toaster position="top-right" />
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
