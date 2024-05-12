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
        <div className="grid grid-rows-[auto_1fr_auto] h-full bg-darker text-lighter">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
