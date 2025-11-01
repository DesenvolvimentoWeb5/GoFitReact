import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('gofit_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulação de API - substituir por chamada real ao backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validação básica (substituir por validação real)
      if (email === 'demo@email.com' && password === 'senha123') {
        const userData: User = {
          id: '1',
          name: 'Usuário Demo',
          email: email
        };
        setUser(userData);
        localStorage.setItem('gofit_user', JSON.stringify(userData));
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      // Simulação de API - substituir por chamada real ao backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validação básica (substituir por validação real)
      if (password.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres');
      }

      const userData: User = {
        id: Date.now().toString(),
        name,
        email
      };
      
      setUser(userData);
      localStorage.setItem('gofit_user', JSON.stringify(userData));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gofit_user');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};