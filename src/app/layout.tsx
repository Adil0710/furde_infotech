import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster as Toast } from "react-hot-toast";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Furde Infotech",
  description: "Innovative Ideas, Dynamic Results!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${montserrat.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
          <Toast position="top-center" reverseOrder={false} />
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
