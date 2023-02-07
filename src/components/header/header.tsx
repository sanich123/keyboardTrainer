import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './header.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
import PersonLight from '../../assets/img/person-light.webp';
import PersonDarck from '../../assets/img/person-dark.webp';
import { ROUTES } from '../../utils/const';
import { Link } from 'react-router-dom';
import Settings from '../Settings';


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

    return (
      <div className="div-login-navigation">
        <img src={isLight ? PersonLight : PersonDarck}
          alt="settings" className="mr-[5px]"
        />
        <p className="text-login">{isRu ? 'Войти' : 'Login'}</p>
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
