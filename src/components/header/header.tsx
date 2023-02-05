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
import { useState } from 'react';
import ModalSettings from '../modal-settings/modal-settings';


export default function Header() {

  const { isRu, isLight } = useThemeLang();
  const [modal, setModal] = useState(false);

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

  function Settings() {

    return (
      <div className="div-settings mr-[30px]"
        onClick={() => setModal(!modal)}
      >
        <img src={isLight ? SettingsLight : SettingsDarck}
          alt="settings" className="mr-[5px]"
        />
        <p className="hover:text-[#E21022]">{isRu ? 'Настройки' : 'Settings'}</p>
      </div>
    );
  }

  function LoginNavigation() {

    return (
      <div className="div-login-navigation">
        <img src={isLight ? PersonLight : PersonDarck}
          alt="settings" className="mr-[5px]"
        />
        <p className="hover:text-[#E21022]">{isRu ? 'Войти' : 'Login'}</p>
      </div>
    );
  }


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
        { modal && <ModalSettings /> }
      </div>
    </div>
  );
}
