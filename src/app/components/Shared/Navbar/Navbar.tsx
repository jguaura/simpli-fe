'use client';
import { Chivo } from 'next/font/google';
import styles from './Navbar.module.css';
import { MdDehaze } from 'react-icons/md';
import { Sheet, SheetContent, SheetTrigger } from '../Shadcn/BaseSheet';
import NavbarContent from './NavbarContent/NavbarContent';

const chivo = Chivo({ subsets: ['latin'] });

function Navbar() {
  const logoStyles = `${chivo.className} ${styles.logo}`;
  const navbarInnerStyles = `${styles.navbarInner} wrapper`

  return (
    <div className={styles.navbar}>
      <div className={navbarInnerStyles}>
        <h2 className={logoStyles}>VroomVault</h2>
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
