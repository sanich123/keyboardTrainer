import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './header.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
import Settings from '../Settings';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/const';
import PersonLight from '../../assets/img/person-light.webp';
import PersonDarck from '../../assets/img/person-dark.webp';


export default function Header() {

  const { isRu, isLight } = useThemeLang();

  function Navigation() {

    return (
      <nav className="header-nav">
        <li className="li-navigation li-margin">
          <Link to={ROUTES.main}>{isRu ? 'Об игре' : 'About'}</Link>
        </li>
        <li className="li-navigation li-margin">
          <Link to={ROUTES.game}>{isRu ? 'Гонка' : 'Race'}</Link>
        </li>
        <li className="li-navigation">
          <Link to={ROUTES.cabinet}>{isRu ? 'Статистика' : 'Stats'}</Link>
        </li>
      </nav>
    );
  }

  function LoginNavigation() {
    const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
    const btnText = isRu ? 'Войти' : 'Login';
    const logoutBtnText = isRu ? 'Выйти' : 'Log out';
    const loadingText = isRu ? 'Загрузка...' : 'Loading...';
    const themeImg = isLight ? PersonLight : PersonDarck;
    return (
      <div className="div-login-navigation">
        <Link to={ROUTES.cabinet}>
          <img
            src={isAuthenticated ? user?.picture : themeImg}
            alt="settings"
            className="mr-[5px]"
            loading="lazy"
          />
        </Link>

        <Link
          className="text-login"
          onClick={() => !isAuthenticated && loginWithRedirect()}
          to={ROUTES.cabinet}
        >
          {isAuthenticated && user?.email}
          {!isAuthenticated && !isLoading && btnText}
          {isLoading && loadingText}
        </Link>
        {isAuthenticated && (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            {logoutBtnText}
          </button>
        )}
      </div>
    );
  }


  return (
    <div className={ `div-header ${isLight ? 'text-light-theme' : 'text-darck-theme'}` } >
      <div className="div-header-component div-header-component-1">
        <img src={isLight ? LogoRaceBlack : LogoRace}
          width={128} height={40} alt="logo-race"
          className="img-logo"
        />
        <Navigation />
      </div>
      <div className="div-header-component div-header-component-2">
        <Settings />
        <LoginNavigation />
      </div>
    </div>
  );
}
