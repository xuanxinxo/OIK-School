import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import dynamic from "next/dynamic";

// Load ChatWidget client-side only
const ChatWidget = dynamic(
  () => import('@/components/ChatWidget').then((mod) => mod.default),
  { ssr: false }
);

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F645TC5BX6"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F645TC5BX6');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Main content */}
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
