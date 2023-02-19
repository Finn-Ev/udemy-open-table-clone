import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Restaurant App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"w-f"}>{children}</body>
    </html>
  );
}
