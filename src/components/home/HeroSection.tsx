"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import AdmissionsCountdown from "@/components/AdmissionsCountdown";

export default function HeroSection() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAuthModalOpen(true);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/img/dep.png"
          alt="Học sinh"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
          priority
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Tuyển sinh 2025
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Hành trình chinh phục tri thức
          </p>
          
          <div className="mt-10">
            <button
              onClick={handleRegisterClick}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Đăng ký ngay
            </button>
            <Link
              href="#thong-tin"
              className="ml-4 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Tìm hiểu thêm thông tin
            </Link>
          </div>
          
          <div className="mt-12">
          </div>
        </div>
      </div>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="register"
      />
    </section>
  );
}
