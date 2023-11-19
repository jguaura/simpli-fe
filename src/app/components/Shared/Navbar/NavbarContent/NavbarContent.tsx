import { Chivo, Kanit } from 'next/font/google';
import styles from './NavbarContent.module.css';
import {
  SiInstagram,
  SiFacebook,
  SiTwitter,
  SiWhatsapp,
  SiGithub
} from 'react-icons/si';

const chivo = Chivo({ subsets: ['latin'] });
const kanit = Kanit({ weight: ['400', '600', '700'], subsets: ['latin'] });

function NavbarContent() {
  const logoStyles = `${chivo.className} ${styles.logo}`;
  const itemsStyles = `${kanit.className} ${styles.items}`;
  const socialMediaStyles = `${kanit.className} ${styles.socialMedia}`;

  return (
    <div className={styles.container}>
      <h2 className={logoStyles}>BikesWorld</h2>
      <div className={itemsStyles}>
        <button>Bikes</button>
        <button>Accesories</button>
      </div>
      <div className={socialMediaStyles}>
        <div className={styles.icons}>
          <SiFacebook size='20' />
          <SiWhatsapp size='20' />
          <SiInstagram size='20' />
          <SiTwitter size="20" />
        </div>
        <div className={styles.footer}>
          <div className={styles.copy}>
            BikesWorld &copy; 2023. All rights reserved.
          </div>
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

export default NavbarContent;
