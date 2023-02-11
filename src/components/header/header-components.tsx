import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import './header.scss';
import PersonLight from '../../assets/img/person-light.webp';
import PersonDarck from '../../assets/img/person-dark.webp';
import { langsData } from '../Settings/LangSwitch/langsData';
import { useAuth0 } from '@auth0/auth0-react';


// function Navigation() {

//   return (
//     <nav className="header-nav">
//       <li className="li-navigation li-margin">
//         <Link to={ROUTES.main}>{isRu ? 'Об игре' : 'About'}</Link>
//       </li>
//       <li className="li-navigation li-margin">
//         <Link to={ROUTES.game}>{isRu ? 'Гонка' : 'Race'}</Link>
//       </li>
//       <li className="li-navigation">
//         <Link to={ROUTES.cabinet}>{isRu ? 'Статистика' : 'Stats'}</Link>
//       </li>
//     </nav>
//   );
// }

export function LoginNavigation() {

  const { isRu, isLight } = useThemeLang();

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


export function Navigation() {
  const { isRu } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';

  console.log(langsData.en);
  return (
    <nav className="header-nav">
      <li className="li-navigation li-margin">
        <Link to={ROUTES.main}>{`${langsData[lang].menuMain.about}`}</Link>
      </li>
      <li className="li-navigation li-margin">
        <Link to={ROUTES.game}>{`${langsData[lang].menuMain.race}`}</Link>
      </li>
      <li className="li-navigation">
        <Link to={ROUTES.cabinet}>{`${langsData[lang].menuMain.stats}`}</Link>
      </li>
    </nav>
  );
}

// export function LoginNavigation() {
//   const { isRu, isLight } = useThemeLang();
//   const lang = isRu ? 'ru' : 'en';

//   return (
//     <div className="div-login-navigation">
//       <img src={isLight ? PersonLight : PersonDarck}
//         alt="settings" className="mr-[5px]"
//       />
//       <p className="text-login">{`${langsData[lang].menuLogin.login}`}</p>
//     </div>
//   );
// }
