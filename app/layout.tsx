import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Classroom → Textbook → Real Life',
  description: 'From Classroom English to Real-Life Communication — an interactive platform for teenage English learners.',
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
