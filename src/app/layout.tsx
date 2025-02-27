import './globals.css';
import React, { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Header from '@/components/layout/header';
import MUIThemeProvider from 'src/contexts/MUIThemeProvider';

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
        <title>My App</title>
        <meta name="description" content="My App" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MUIThemeProvider>
            <div className="wrapper">
              <Suspense>
                <Header />
              </Suspense>
              <div className="min-h-[100vh]">
                {children}
                {/* <Footer /> */}
              </div>
            </div>
          </MUIThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
