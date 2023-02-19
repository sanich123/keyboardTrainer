import './footer.scss';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { DEVELOPERS } from '../../data/developers-info';
import LogoRS from '../../data/svg-functions/logo-rs';
import LogoRace from '../../data/svg-functions/logo-race';


export function Footer() {

  const { isLight } = useThemeLang();

  return (
    <div className={`footer-all ${isLight ? 'footer-light' : 'footer-darck'}`}>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-div-component">
            <LogoRace widthNum={'176'} heightNum={'55'} colorName={`${isLight ? '#FFFFFF' : '#514B4B'}`} />
            <div className="div-links-github">
              {DEVELOPERS.map((data) => <a href={data.gitHub} className="link-github margin-after-img" key={data.id}>{data.name}</a>)}
            </div>
          </div>
          <div className="footer-div-component footer-div-component-right">
            <a href="https://rs.school/js/">
              <LogoRS widthNum={'154'} heightNum={'57'} colorName={`${isLight ? '#FFFFFF' : '#514B4B'}`} />
            </a>
            <p className="margin-after-img">© 2023. Special for RS School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
