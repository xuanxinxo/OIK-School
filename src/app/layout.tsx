"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import dynamic from 'next/dynamic';

// Tải ChatWidget với tùy chọn ssr: false để tránh lỗi hydration
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          {/* Site chrome */}
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />
            {/* Main */}
            <main className="flex-1">{children}</main>
            {/* Footer */}
            <Footer />
            
            {/* Chat Widget */}
            <ChatWidget />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
