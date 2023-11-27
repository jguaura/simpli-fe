import { Chivo, Kanit } from 'next/font/google';
import { SiInstagram, SiFacebook, SiTwitter, SiWhatsapp, SiGithub } from 'react-icons/si';
import Link from 'next/link';
import { SheetClose } from '../../../../UI/BaseSheet/BaseSheet';
import styles from './NavbarSheetContent.module.css';

const chivo = Chivo({ subsets: ['latin'] });
const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function NavbarSheetContent() {
  const logoStyles = `${chivo.className} ${styles.logo}`;
  const itemsStyles = `${kanit.className} ${styles.items}`;
  const socialMediaStyles = `${kanit.className} ${styles.socialMedia}`;

  return (
    <div className={styles.container}>
      <h2 className={logoStyles}>VroomVault</h2>
      <div className={itemsStyles}>
        <SheetClose asChild>
          <Link href="/">Home</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/products">Bikes</Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/accesories">Accesories</Link>
        </SheetClose>
      </div>
      <div className={socialMediaStyles}>
        <div className={styles.icons}>
          <SiFacebook size="20" />
          <SiWhatsapp size="20" />
          <SiInstagram size="20" />
          <SiTwitter size="20" />
        </div>
        <div className={styles.footer}>
          <div className={styles.copy}>VroomVault &copy; 2023. All rights reserved.</div>
          <div className={styles.promo}>
            <span>Jose R. Guaura</span>
            <button>
              <SiGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarSheetContent;
