'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/src/context/AuthContext';
import AuthModal from './AuthModal';
import Avatar from './Avatar';

export default function Header() {
  const { user, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <header className="w-full border-b border-black/[.08] dark:border-white/[.145] bg-[--color-primary-soft-2]">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 sm:p-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo truong.jpg" alt="Logo THPT Ông Ích Khiêm" className="h-20 w-20" />
            <span className="font-semibold">TP Đà Nẵng</span>
            <span className="font-semibold">THPT Ông Ích Khiêm</span>
          </Link>
          
          <nav className="flex items-center gap-4 sm:gap-6 text-sm">
            <a href="/gioi-thieu" className="hover:underline">Giới thiệu</a>
            <a href="/tin-tuc" className="hover:underline">Tin tức</a>
            <a href="/tuyen-sinh" className="hover:underline">Tuyển sinh</a>
            <a href="/lien-he" className="hover:underline">Liên hệ</a>
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 text-sm hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
                >
                  <Avatar name={user.name} size="md" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-gray-900">{user.name}</span>
                    <span className="text-xs text-gray-500">Đã đăng nhập</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <a
                      href="/test"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Làm bài test
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLoginClick}
                  className="text-sm hover:underline"
                >
                  Đăng nhập
                </button>
                <button
                  onClick={handleRegisterClick}
                  className="px-4 py-2 text-sm font-medium text-white rounded-lg"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Đăng ký
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}


