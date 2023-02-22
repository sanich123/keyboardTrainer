import { Settings } from '../Settings';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../utils/const';
import { LoginNavigation, Navigation } from './header-components';
import logo from '../../assets/img/logo.svg';
import styles from './header.module.scss';
import { RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';

export function Header() {
  const [show, setShow] = useState(false);
  const active = show ? styles.active : '';

  return (
    <header className={styles.header}>
      <div className={styles.header__leftSide}>
        <img src={logo} className={styles.headerLogo} alt="logo" />
        <div className={styles.header__nav}>
          <Navigation />
        </div>
      </div>
      <div className={styles.header__rightSide}>
        <Settings />
        <LoginNavigation />
      </div>
      <div className={styles.mobileMenu}>
        <RiMenu3Fill onClick={() => setShow(!show)} />
        <div className={`${styles.mobileNav} ${active}`}>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
