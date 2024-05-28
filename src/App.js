import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import PropertyPage from './pages/PropertyPage';
import RegisterPage from './components/RegistrationForm';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/property/add" element={<PropertyForm />} />
        <Route path="/property/:id" element={<PropertyList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
