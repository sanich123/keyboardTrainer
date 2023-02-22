import { Link } from 'react-router-dom';
import { LANG_VALUES, ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { langsData } from '../Settings/LangSwitch/langsData';
import { useAuth0 } from '@auth0/auth0-react';
import { RiUser3Fill } from 'react-icons/ri';
import styles from './header-components.module.scss';

export function Navigation() {
  const { isRu } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  const { isAuthenticated } = useAuth0();
  const { about, race, stats } = langsData[lang].menuMain as { [key: string]: string };

  return (
    <nav className={styles.headerNav}>
      <li className={`${styles.liNavigation} ${styles.liMargin}`}>
        <Link to={ROUTES.main}>{about}</Link>
      </li>
      <li className={`${styles.liNavigation} ${styles.liMargin}`}>
        <Link to={ROUTES.game}>{race}</Link>
      </li>
      {isAuthenticated && (
        <li className={styles.liNavigation}>
          <Link to={ROUTES.cabinet}>{stats}</Link>
        </li>
      )}
    </nav>
  );
}

export function LoginNavigation() {
  const { isRu } = useThemeLang();
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  const { logIn, logOut } = langsData[lang].menuLogin as { [key: string]: string };
  const { loading } = langsData[lang].misc as { [key: string]: string };
  const themeImg = <RiUser3Fill className={styles.imgUser} />;

  return (
    <div className={styles.divLoginNavigation}>
      <Link to={ROUTES.cabinet}>
        {
          isAuthenticated
            ? <img src={user?.picture} alt="settings" className={styles.imgUser} loading="lazy" />
            : themeImg
        }
      </Link>

      <Link
        className={styles.textLogin}
        onClick={() => !isAuthenticated && loginWithRedirect()}
        to={ROUTES.cabinet}
      >
        <>
          {isAuthenticated && user?.nickname}
          {!isAuthenticated && !isLoading && logIn}
          {isLoading && loading}
        </>
      </Link>
      {isAuthenticated && (
        <button
          className={styles.logoutBtn}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          {logOut}
        </button>
      )}
    </div>
  );
}
