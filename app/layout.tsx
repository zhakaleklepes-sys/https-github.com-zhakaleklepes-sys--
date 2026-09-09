import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'English Life Quest — Grade 9 English Board Game',
  description: 'A modern English board game that turns textbook language into real-life communication.',
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
