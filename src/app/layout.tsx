import './globals.css';
import React, { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Header from '@/components/layout/header';
import MUIThemeProvider from 'src/contexts/MUIThemeProvider';
import { Metadata } from 'next';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clbthudo.com'),
  title: 'Câu lạc bộ bơi lội Thủ Đô',
  description: 'Câu lạc bộ bơi lội Thủ Đô - Địa chỉ học bơi uy tín tại Hà Nội',
  openGraph: {
    title: 'Câu lạc bộ bơi lội Thủ Đô',
    description:
      'Câu lạc bộ bơi lội Thủ Đô - Địa chỉ học bơi uy tín tại Hà Nội',
    images: [
      {
        url: '/images/banner/Intro.jpg',
        type: 'image/jpeg',
        width: 800,
        height: 450,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>CLB Bơi Thủ Đô</title>
        <meta name="description" content="CLB Bơi Thủ Đô" />
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MUIThemeProvider>
            <div className="wrapper overflow-hidden">
              <Suspense>
                <Header />
              </Suspense>
              <div className="min-h-[100vh]">
                {children}
                <Footer />
              </div>
            </div>
          </MUIThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
