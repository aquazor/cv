import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div
      className={`${roboto.variable} ${robotoMono.variable} flex min-h-screen flex-col font-roboto`}
    >
      <Header />
      <main className="flex grow flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
