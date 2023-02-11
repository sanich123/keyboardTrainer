import { useThemeLang } from '../../utils/hooks/use-theme-lang/use-theme-lang';
import { LANG_VALUES } from '../../utils/const';
import { langsData } from '../Settings';
import styles from './Keyboard.module.scss';
import { useState } from 'react';

export interface KeyboardProps {
  prop?: string;
}
export function Keyboard() {
  // const randomIterableKey = getRandomNum(0, 10000000000000);
  const { isRu } = useThemeLang();
  const lang = isRu ? LANG_VALUES.ru : LANG_VALUES.en;
  const { hideShowKeyboard } = (langsData[lang].pageGame as { [key: string]: string });

  const [showKeyboard, setShowKeyboard] = useState(true);

  const onClicksHideShowKeyboardBtnHandler = () => setShowKeyboard(!showKeyboard);

  return (
    <div className={styles.Keyboard}>
      <button
        type="button"
        className={styles.hideShowKeyboardBtn}
        onClick={onClicksHideShowKeyboardBtnHandler}
      >
        {hideShowKeyboard}
      </button>
      <div className={showKeyboard ? styles.keyboardImg__active : styles.keyboardImg}>
        keyboard
      </div>
    </div>
  );
}
