import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavContainer } from "@/components/NavContainer";
import Footer from "../components/Footer";
import { RevealOverlay } from "@/components/RevealOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escencia Restaurant",
  description: "A authentic and speciality Spanish Tapas Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
