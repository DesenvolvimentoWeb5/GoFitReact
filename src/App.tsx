import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth/AuthContext';
import PrivateRoute from './auth/PrivateRoute';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/Home';
import './App.css';

// Componente para redirecionar usuários autenticados
const AuthenticatedRedirect: React.FC = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/" replace /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rotas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Rota raiz - redireciona baseado na autenticação */}
            <Route path="/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            
            {/* Rota fallback */}
            <Route path="*" element={<AuthenticatedRedirect />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;