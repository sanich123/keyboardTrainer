import './footer.scss';
import LogoRace from '../../assets/img/logo-race.webp';
import LogoRaceBlack from '../../assets/img/logo-race-bl.webp';
// import LogoRS from '../../assets/img/rs-logo.webp';
// import LogoRSBlack from '../../assets/img/rs-logo-bl.webp';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { DEVELOPERS } from '../../data/developers-info';
import LogoRS from '../../data/svg-functions/logo-rs';


export default function Footer() {

  const { isLight } = useThemeLang();

  return (
    <div className={`footer-all ${isLight ? 'footer-light' : 'footer-darck'}`}>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-div-component">
            <img src={isLight ? LogoRace : LogoRaceBlack} alt="logo-race"/>
            <div className="div-links-github">
              { DEVELOPERS.map((data) => <a href={data.gitHub} className="link-github margin-after-img" key={data.id}>{data.name}</a>) }
            </div>
          </div>
          <div className="footer-div-component footer-div-component-right">
            <a href="https://rs.school/js/">
              <LogoRS widthNum={'154'} heightNum={'57'} colorName={`${isLight ? '#FFFFFF' : '#514B4B'}`} />
              {/* <img src={isLight ?  LogoRS : LogoRSBlack} alt="rs-logo"  className="margin-after-img"/> */}
            </a>
            <p className="margin-after-img">© 2023. Special for RS School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
