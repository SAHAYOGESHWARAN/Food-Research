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
import StudiesPage from './modules/studies/StudiesPage';
import StudyDetailPage from './modules/studies/StudyDetailPage';
import AddStudyPage from './modules/studies/AddStudyPage';
import TutorialsPage from './modules/tutorials/TutorialsPage';
import TutorialDetailPage from './modules/tutorials/TutorialDetailPage';
import AddTutorialPage from './modules/tutorials/AddTutorialPage';
import IngredientsPage from './modules/ingredients/IngredientsPage';
import IngredientDetailPage from './modules/ingredients/IngredientDetailPage';
import AddIngredientPage from './modules/ingredients/AddIngredientPage';
import AddMarketInsightPage from './modules/marketInsights/AddMarketInsightPage';
import AddProductPage from './modules/productData/AddProductPage';
import AddCommitmentPage from './modules/commitments/AddCommitmentPage';
import AddRegulationPage from './modules/regulations/AddRegulationPage';

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
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/studies/add" element={<AddStudyPage />} />
            <Route path="/studies/:id" element={<StudyDetailPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/tutorials/add" element={<AddTutorialPage />} />
            <Route path="/tutorials/:id" element={<TutorialDetailPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/ingredients/add" element={<AddIngredientPage />} />
            <Route path="/ingredients/:id" element={<IngredientDetailPage />} />
            <Route path="/market-insights/add" element={<AddMarketInsightPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/commitments/add" element={<AddCommitmentPage />} />
            <Route path="/regulations/add" element={<AddRegulationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SubscriptionProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
