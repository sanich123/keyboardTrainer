import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { DEVELOPERS } from '../../data/developers-info';
import { LANG_VALUES } from '../../utils/const';
import logo from '../../assets/img/logo.svg';
import logoRss from '../../assets/img/logo-rss.svg';
import { langsData } from '../Settings';
import styles from './footer.module.scss';

export function Footer() {
  const { isRu } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;

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
