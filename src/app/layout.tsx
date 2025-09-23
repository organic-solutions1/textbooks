import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Textbooks",
  description: "A minimal Next.js scaffold with Supabase",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold text-slate-900">
              Textbooks
            </Link>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
              <Link href="/" className="transition hover:text-slate-900">
                Home
              </Link>
              <Link
                href="/listings"
                className="transition hover:text-slate-900"
              >
                Listings
              </Link>
              <Link
                href="/listings/new"
                className="transition hover:text-slate-900"
              >
                Add Listing
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto min-h-[calc(100vh-5rem)] max-w-5xl px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
