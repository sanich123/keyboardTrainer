import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './header.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
import SettingsLight from '../../assets/img/settings-light.webp';
import SettingsDarck from '../../assets/img/settings-black.webp';
import PersonLight from '../../assets/img/person-light.webp';
import PersonDarck from '../../assets/img/person-dark.webp';
import { ROUTES } from '../../utils/const';
import { Link } from 'react-router-dom';


function Navigation() {

  const { isRu } = useThemeLang();

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

function Settings() {

  const { isLight, isRu } = useThemeLang();

  return (
    <div className="div-settings mr-[30px]">
      <img src={isLight ? SettingsLight : SettingsDarck}
        alt="settings" className="mr-[5px]"
      />
      <p>{isRu ? 'Настройки' : 'Settings'}</p>
    </div>
  );
}


function LoginNavigation() {

  const { isLight, isRu } = useThemeLang();

  return (
    <div className="div-login-navigation">
      <img src={isLight ? PersonLight : PersonDarck}
        alt="settings" className="mr-[5px]"
      />
      <p>{isRu ? 'Войти' : 'Login'}</p>
    </div>
  );
}


export default function Header() {

  const { isLight } = useThemeLang();

  return (
    <div className="div-header"
      style={{color: `${isLight ? '#000000' : '#FFFFFF'}`}}
    >
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
