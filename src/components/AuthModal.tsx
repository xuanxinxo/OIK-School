'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'register';
  onRegisterSuccess?: () => void;
}

export default function AuthModal({ isOpen, onClose, initialMode, onRegisterSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        const success = await login(formData.email, formData.password);
        if (success) {
          onClose();
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        } else {
          setError('Email hoặc mật khẩu không đúng');
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Mật khẩu xác nhận không khớp');
          return;
        }
        const result = await register(formData.name, formData.email, formData.password, () => {
          onClose();
          setFormData({ name: '', email: '', password: '', confirmPassword: '' });
          if (onRegisterSuccess) {
            onRegisterSuccess();
          }
        });
        if (!result.success) {
          setError(result.message || 'Đăng ký thất bại. Vui lòng thử lại');
        }
      }
    } catch {
      setError('Có lỗi xảy ra. Vui lòng thử lại');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium mb-2">Họ và tên</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập họ và tên"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mật khẩu"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium mb-2">Xác nhận mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
          )}

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 rounded-lg font-medium text-white"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            {isSubmitting ? 'Đang xử lý...' : (mode === 'login' ? 'Đăng nhập' : 'Đăng ký')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600">
            {mode === 'login' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
          </span>
          <button
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="ml-2 text-blue-600 hover:underline"
          >
            {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập'}
          </button>
        </div>
      </div>
    </div>
  );
}

