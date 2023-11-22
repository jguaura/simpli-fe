import Link from 'next/link';
import Carousel from './components/UI/Carousel/Carousel';
import styles from './page.module.css';
import { Popover, PopoverContent, PopoverTrigger } from './components/UI/BasePopover/BasePopover';
export default async function Home() {
  const images = [
    'https://res.cloudinary.com/jguaura/image/upload/c_fill/v1700358842/simpli/ezpbf8h2mb5npzi8gwos.jpg',
    'https://res.cloudinary.com/jguaura/image/upload/c_fill/v1700358841/simpli/gifdnbzszyyd0xphn2v6.jpg',
    'https://res.cloudinary.com/jguaura/image/upload/c_fill/v1700358840/simpli/bp1ggamwyycoaijm9ruw.jpg'
  ];
  return (
    <div className={styles.page}>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <header>
        <h1>Welcome to VroomVault</h1>
        <p>Your Ultimate Destination for Automotive Excellence</p>
      </header>
      <main>
        <Carousel images={images || []} options={{ loop: true }} />
        <section>
          <h2>Explore Our Exclusive Collection</h2>
          <p>
            Discover a curated selection of premium vehicles and accessories
            that redefine automotive luxury.
          </p>
          <div className={styles.buttons}>
            <button className='btn'>
              <Link href={'/products'}>Explore Bikes</Link>
            </button>
            <button className='btn'>
              <Link href={'/accesories'}>Explore Accesories</Link>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
