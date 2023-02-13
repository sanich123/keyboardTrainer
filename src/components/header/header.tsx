import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './header.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
import Settings from '../Settings';
import { LoginNavigation, Navigation } from './header-components';

export default function Header() {
  const { isLight } = useThemeLang();

  return (
    <div
      className={`div-header ${
        isLight ? 'text-light-theme' : 'text-darck-theme'
      }`}
    >
      <div className="div-header-component div-header-component-1">
        <img
          src={isLight ? LogoRaceBlack : LogoRace}
          width={128}
          height={40}
          alt="logo-race"
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
