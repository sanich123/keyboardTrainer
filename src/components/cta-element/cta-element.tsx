import { Link } from 'react-router-dom';
import { LANG_VALUES, ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import { langsData } from '../Settings';
import styles from './cta-element.module.scss';

export default function CtaElement() {
<<<<<<< HEAD
  const { isRu, isLight } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
=======
  const { isRu } = useThemeLang();
  const lang = isRu ? 'ru' : 'en';
  const { btnRules, btnStartNow, ctaText } = langsData[lang].pageHome as { [key: string]: string };
>>>>>>> develop

  return (
    <main className={styles.cta}>
      <h1 className={styles.h1}>Keyboard Racing</h1>
      <p className={styles.p}>{ctaText}</p>
      <div className={styles.btns}>
        <BtnSecondary text={btnRules} />
        <Link to={ROUTES.game}>
          <BtnPrinary text={btnStartNow} />
        </Link>
      </div>
    </main>
  );
}

