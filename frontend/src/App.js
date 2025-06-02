import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { SubscriptionProvider } from './context/SubscriptionContext';
import { ThemeProvider } from './context/ThemeContext';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import ProductListPage from './modules/productData/ProductListPage';
import ProductDetailPage from './modules/productData/ProductDetailPage';
import CommitmentsPage from './modules/commitments/CommitmentsPage';
import MarketInsightsPage from './modules/marketInsights/MarketInsightsPage';
import RegulationsPage from './modules/regulations/RegulationsPage';

import './styles/global.css';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <SubscriptionProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/commitments" element={<CommitmentsPage />} />
            <Route path="/market-insights" element={<MarketInsightsPage />} />
            <Route path="/regulations" element={<RegulationsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SubscriptionProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
