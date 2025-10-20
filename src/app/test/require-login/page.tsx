'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function RequireLoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Cần đăng nhập để làm bài test
          </h1>
          
          <p className="text-gray-600 mb-8">
            Để làm bài test tuyển sinh THPT Ông Ích Khiêm, bạn cần đăng nhập vào tài khoản trước. 
            Điều này giúp chúng tôi lưu trữ kết quả và liên hệ tư vấn cho bạn.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => router.push('/')}
              className="w-full px-6 py-3 rounded-lg font-medium text-white"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Đăng nhập ngay
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="w-full px-6 py-3 rounded-lg font-medium text-gray-600 border border-gray-300 hover:bg-gray-50"
            >
              Về trang chủ
            </button>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Tại sao cần đăng nhập?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Lưu trữ kết quả test của bạn</li>
              <li>• Tư vấn tuyển sinh cá nhân</li>
              <li>• Bảo mật thông tin học sinh</li>
              <li>• Theo dõi quá trình tuyển sinh</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
