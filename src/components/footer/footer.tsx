import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { DEVELOPERS } from '../../data/developers-info';
<<<<<<< HEAD
import LogoRS from '../../data/svg-functions/logo-rs';
import LogoRace from '../../data/svg-functions/logo-race';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../Settings';


export default function Footer() {

  const { isLight, isRu } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  const colorLogo = isLight ? '#FFFFFF' : '#514B4B';
  const colorLogo2 = isLight ? '#514B4B' : '#FFFFFF';

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
              <LogoRS widthNum={'154'} heightNum={'57'} colorName={colorLogo} colorName2={colorLogo2} />
            </a>
            <p className="margin-after-img">{`${langsData[lang].footer.sign}`}</p>
=======
import logo from '../../assets/img/logo.svg';
import logoRss from '../../assets/img/logo-rss.svg';
import { langsData } from '../Settings';
import styles from './footer.module.scss';


export function Footer() {
  const { isRu } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';

  return (
    <section className={styles.footerSection}>
      <footer className={styles.footer}>
        <div className={styles.footer__leftSide}>
          <img src={logo} className={styles.footerLogo} alt="logo" />
          <div className={styles.divLinksGithub}>
            {DEVELOPERS.map((data) =>
              (
                <a
                  href={data.gitHub}
                  className={styles.linkGithub}
                  key={data.id}
                >{data.name}
                </a>
              ),
            )}
>>>>>>> develop
          </div>
        </div>
        <div className={styles.footer__rightSide}>
          <a href="https://rs.school/js/">
            <img src={logoRss} className={styles.logoRss} alt="logo-rss" />
          </a>
          <p className={styles.marginAfterImg}>{langsData[lang].footer.sign as string}</p>
        </div>
      </footer>
    </section>
  );
}
