'use client';
import { Chivo } from 'next/font/google';
import styles from './Navbar.module.css';
import { MdDehaze } from 'react-icons/md';
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '../Shadcn/BaseSheet';
import NavbarContent from './NavbarContent/NavbarContent';

const chivo = Chivo({ subsets: ['latin'] });

function Navbar() {
  const logoStyles = `${chivo.className} ${styles.logo}`;
  return (
    <div className={styles.navbar}>
      <h2 className={logoStyles}>BikesWorld</h2>
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
  );
}

export default Navbar;
