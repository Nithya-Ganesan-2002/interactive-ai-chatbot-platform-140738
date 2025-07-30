import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Chatbot Platform",
  description: "Modern conversational AI platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen flex flex-col`}>
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/70 z-10 shadow-sm">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg text-[var(--color-foreground)]">AI Chatbot</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/chat" className="text-sm font-medium hover:text-primary transition">Chat</Link>
            <Link href="/profile" className="text-sm font-medium hover:text-primary transition">Profile</Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary transition">Login</Link>
            <Link href="/register" className="text-sm font-medium hover:text-primary transition">Register</Link>
          </nav>
        </header>
        <main className="flex-1 flex">
          {/* User sidebar (future implementation mobile drawer) */}
          <aside className="hidden md:flex flex-col w-56 border-r border-gray-100 bg-gray-50 p-5">
            <span className="font-semibold mb-4">User Sidebar</span>
            {/* Placeholder content */}
            <span className="text-xs text-gray-400">Links, settings, etc.</span>
          </aside>
          <section className="flex-1 p-4 sm:p-8">{children}</section>
        </main>
        <footer className="bg-white/80 border-t border-gray-100 py-3 text-center text-xs text-gray-400">
          AI Chatbot Platform &copy; {new Date().getFullYear()} &middot; Built with Next.js
        </footer>
      </body>
    </html>
  );
}
