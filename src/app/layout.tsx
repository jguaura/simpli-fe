import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './styles/globals.css';
import Navbar from './components/Shared/Navbar/Navbar';

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bikes world',
  description: 'Lorem ipsum'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Navbar />
        <div className='wrapper'>{children}</div>
      </body>
    </html>
  );
}
