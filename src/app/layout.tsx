import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './styles/globals.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { ProductsContextProvider } from './context/products.context';

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vroom Vault',
  description:
    'Discover a world of speed and style at Vroom Vault - your premier destination for top-notch bikes and accessories. Explore our curated collection of high-performance bicycles and gear, meticulously selected to elevate your cycling experience. From sleek road bikes to rugged mountain bikes, find the perfect ride for every adventure. Browse through a treasure trove of accessories, from cutting-edge helmets to precision-engineered components. Unleash your passion for cycling with Vroom Vault – where quality meets velocity. Ride in style, ride with Vroom Vault'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <ProductsContextProvider>
          <Navbar />
          <div className='wrapper'>{children}</div>
        </ProductsContextProvider>
      </body>
    </html>
  );
}
