import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './header.scss';
import Settings from '../Settings';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../utils/const';
import { LoginNavigation, Navigation } from './header-components';
import LogoRace from '../../data/svg-functions/logo-race';


export default function Header() {

  const { isLight } = useThemeLang();

  return (
    <div className="header-all">
      <div className={ `div-header ${isLight ? 'text-light-theme' : 'text-darck-theme'}` } >
        <div className="div-header-component div-header-component-1">
          <div className="img-logo">
            <LogoRace widthNum={'128'} heightNum={'40'} colorName={`${isLight ? '#514B4B' : '#FFFFFF'}`} />
          </div>
          <Navigation />
        </div>
        <div className="div-header-component div-header-component-2">
          <Settings />
          <LoginNavigation />
        </div>
      </div>
    </div>
  );
}
