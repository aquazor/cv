import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MountedProvider from '@/context/mounted';

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
    <MountedProvider>
      <Head>
        <meta
          name="keywords"
          content="Portfolio, CV, Resume, Frontend, Web, Developer, React, React.js, Next.js, Oleksandr Kornevskyi"
        />
        <meta name="author" content="Oleksandr Kornevskyi" />
        <meta property="og:title" content="Oleksandr Kornevskyi - CV" />
        <meta
          property="og:description"
          content="Discover the professional journey of Oleksandr Kornevskyi, including skills, experience, and achievements."
        />
        <meta property="og:image" content="/photo-02-png" />
        <meta property="og:url" content="https://oleksandr-kornevskyi.vercel.app/" />
        <meta name="twitter:card" content="/favicon-whie-bg.svg" />
        <meta name="twitter:title" content="Oleksandr Kornevskyi - Portfolio & CV" />
        <meta
          name="twitter:description"
          content="Explore my professional journey and achievements on my CV website."
        />
        <meta
          name="description"
          content="Welcome to the portfolio website of Oleksandr Kornevskyi, showcasing my skills, experience, and achievements."
        />
      </Head>
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
    </MountedProvider>
  );
}
