'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { isDisposableEmail, isValidEmail, isStrongPassword } from '@/lib/authUtils';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthResult {
  success: boolean;
  message?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (name: string, email: string, password: string, onSuccess?: () => void) => Promise<AuthResult>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<AuthResult> => {
    setIsLoading(true);
    try {
      if (!isValidEmail(email)) {
        return { success: false, message: 'Địa chỉ email không hợp lệ' };
      }

      if (isDisposableEmail(email)) {
        return {
          success: false,
          message: 'Không chấp nhận email tạm thời. Vui lòng sử dụng email chính thức của bạn.'
        };
      }

      if (!password) {
        return { success: false, message: 'Vui lòng nhập mật khẩu' };
      }

      // Fake API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData: User = {
        id: '1',
        email,
        name: email.split('@')[0]
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Có lỗi xảy ra khi đăng nhập' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    onSuccess?: () => void
  ): Promise<AuthResult> => {
    setIsLoading(true);
    try {
      if (!name || name.trim().length < 2) {
        return { success: false, message: 'Tên phải có ít nhất 2 ký tự' };
      }

      if (!isValidEmail(email)) {
        return { success: false, message: 'Địa chỉ email không hợp lệ' };
      }

      if (isDisposableEmail(email)) {
        return {
          success: false,
          message: 'Không chấp nhận email tạm thời. Vui lòng sử dụng email chính thức của bạn.'
        };
      }

      if (!isStrongPassword(password)) {
        return {
          success: false,
          message:
            'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt'
        };
      }

      // Fake API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const userData: User = {
        id: '1',
        email,
        name
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      if (onSuccess) {
        onSuccess();
      }

      return { success: true };
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, message: 'Có lỗi xảy ra khi đăng ký' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
