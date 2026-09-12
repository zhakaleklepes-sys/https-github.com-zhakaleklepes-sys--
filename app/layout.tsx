import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Real-Life English — Listen. Remember. Type. Use.',
  description: 'A listening, spelling and active-recall trainer with 240 practical English items for Grade 9–10 students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
