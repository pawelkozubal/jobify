import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {ClerkProvider} from '@clerk/nextjs';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pawels Job search',
  description: 'Job application tracking system for my hunters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
    
  );
}
