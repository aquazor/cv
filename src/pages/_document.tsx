import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className={'text-foreground antialiased'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
