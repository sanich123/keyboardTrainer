import './footer.scss';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { DEVELOPERS } from '../../data/developers-info';
import LogoRS from '../../data/svg-functions/logo-rs';
import LogoRace from '../../data/svg-functions/logo-race';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../Settings';


export default function Footer() {

  const { isLight, isRu } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  const colorLogo = isLight ? '#FFFFFF' : '#514B4B';

  return (
    <div className={`footer-all ${isLight ? 'footer-light' : 'footer-darck'}`}>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-div-component">
            <LogoRace widthNum={'176'} heightNum={'55'} colorName={colorLogo} />
            <div className="div-links-github">
              { DEVELOPERS.map(({ gitHub, name, id }) => <a href={gitHub} className="link-github margin-after-img" key={id}>{name}</a>) }
            </div>
          </div>
          <div className="footer-div-component footer-div-component-right">
            <a href="https://rs.school/js/">
              <LogoRS widthNum={'154'} heightNum={'57'} colorName={colorLogo} />
            </a>
            <p className="margin-after-img">{`${langsData[lang].footer.sign}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
