import { useState } from 'react';
import LangSwitch, { langsData } from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import { LANG_VALUES, THEME_VALUES } from '../../utils/const';
import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { RiSettings2Fill } from 'react-icons/ri';
import styles from './Settings.module.scss';

export default function Settings() {
  const [show, setShow] = useState(false);
  const { dispatch, isRu, isLight } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const { light, dark } = THEME_VALUES;
  const lang = isRu ? ru : en;
  const theme = isLight ? light : dark;
  const active = show ? styles.active : '';

  return (
    <div className={styles.Settings}>
      <div className={styles.buttonWrap}>
        <button type="button" className={`${styles.btn} ${active}`} onClick={() => setShow(!show)}>
          <RiSettings2Fill className={styles.buttonIcon} />
          {`${langsData[lang].menuSettings.settingsBtn}`}
        </button>
      </div>
      <div className={`${styles.menu} ${active}`}>
        <LangSwitch {...{ dispatch, theme, lang }} />
        <ThemeSwitch />
      </div>
    </div>
  );
}
