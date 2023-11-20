'use client';
import { Chivo } from 'next/font/google';
import styles from './Navbar.module.css';
import { MdDehaze } from 'react-icons/md';
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '../../UI/BaseSheet/BaseSheet';
import NavbarContent from './NavbarContent/NavbarContent';
import Link from 'next/link';

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
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <MdDehaze size='25' />
            </button>
          </SheetTrigger>
          <SheetContent>
            <NavbarContent />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
