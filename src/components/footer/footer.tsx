import './footer.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
import LogoRS from '../../assets/img/rs-logo.webp';
import LogoRSBlack from '../../assets/img/rs-logo-bl.webp';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';


export default function Footer() {

  const { isLight } = useThemeLang();

  return (
    <div style={{background: `${isLight ? '#292827' : '#EBEBEB'}`, color: `${isLight ? '#FFFFFF' : '#000000'}`}} className="footer">
      <div className="footer-container">
        <div className="footer-div-component">
          <img src={isLight ? LogoRace : LogoRaceBlack} className="margin-after-img" alt="logo-race"/>
          <div className="div-links-github">
            <a href="https://github.com/IrinaIID" className="link-github mr-[30px]">irinaiid</a>
            <a href="https://github.com/sanich123" className="link-github mr-[30px]">sanich123</a>
            <a href="https://github.com/predmaxim" className="link-github">predmaxim</a>
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
  );
}
