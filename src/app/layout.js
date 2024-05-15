import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vibe2Movie: Top movies for your mood',
  description: 'Discover mood-based top rated movies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[1fr_auto] min-h-screen bg-darker text-lighter">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
