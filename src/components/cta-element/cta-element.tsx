import { Link } from 'react-router-dom';
import { LANG_VALUES, ROUTES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { BtnPrinary, BtnSecondary } from '../buttons/buttons';
import { langsData } from '../Settings';
import styles from './cta-element.module.scss';

type Modal = {
  setModal: (arg: boolean) => void
};

export default function CtaElement({ setModal }: Modal) {
  const { isRu } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;
  const { btnRules, btnStartNow, ctaText } = langsData[lang].pageHome as { [key: string]: string };

  return (
    <main className={styles.cta}>
      <h1 className={styles.h1}>Keyboard Racing</h1>
      <p className={styles.p}>{ctaText}</p>
      <div className={styles.btns}>
        <BtnSecondary text={btnRules} setModal={setModal} />
        <Link to={ROUTES.game}>
          <BtnPrinary text={btnStartNow} />
        </Link>
      </div>
    </main>
  );
}

