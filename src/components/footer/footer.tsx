import './footer.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
import LogoRS from '../../assets/img/rs-logo.webp';
import LogoRSBlack from '../../assets/img/rs-logo-bl.webp';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { DEVELOPERS } from './developers-info';


export default function Footer() {

  const { isLight } = useThemeLang();

  return (
    <div className={`footer-all ${isLight ? 'footer-light' : 'footer-darck'}`}>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-div-component">
            <img src={isLight ? LogoRace : LogoRaceBlack} className="margin-after-img" alt="logo-race"/>
            <div className="div-links-github">
              { DEVELOPERS.map((data) => <a href={data.gitHub} className="link-github" key={data.id}>{data.name}</a>) }
            </div>
          </div>
          <div className="footer-div-component footer-div-component-right">
            <a href="https://rs.school/js/">
              <img src={isLight ?  LogoRS : LogoRSBlack} alt="rs-logo"  className="margin-after-img"/>
            </a>
            <p>© 2023. Special for RS School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
