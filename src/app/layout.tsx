import { Metadata } from 'next';
import NavBar from './NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | OpenTable',
    default: 'OpenTable',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <div className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
