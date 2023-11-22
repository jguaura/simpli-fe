'use client';
import { Chivo } from 'next/font/google';
import styles from './Navbar.module.css';
import Link from 'next/link';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import NavbarSheet from './NavbarSheet/NavbarSheet';

const chivo = Chivo({ subsets: ['latin'] });

function Navbar() {
  const logoStyles = `${chivo.className} ${styles.logo}`;
  const navbarInnerStyles = `${styles.navbarInner} wrapper`;

  return (
    <div className={styles.navbar}>
      <div className={navbarInnerStyles}>
        <button>
          <Link href={'/'} className={logoStyles}>
            VroomVault
          </Link>
        </button>
        <div className={styles.buttons}>
          <ShoppingCart />
          <NavbarSheet />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
