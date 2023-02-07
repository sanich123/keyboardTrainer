import { changeLanguage } from '../../../redux/global-state/global-state';
import { langsData } from './langsData';
import { RiTranslate2 } from 'react-icons/ri';
import style from './LangSwitch.module.scss';
import { SettingsProps } from '../../../utils/types/types';

export default function LangSwitch({ dispatch, theme, lang }: SettingsProps) {
  // const { dispatch, isRu, isLight }: { dispatch: Dispatch<AnyAction>; isRu: boolean; isLight: boolean; } = useThemeLang();
  // const { ru, en } = LANG_VALUES;
  // const { light, dark } = THEME_VALUES;
  // const lang = isRu ? ru : en;
  // const theme = isLight ? light : dark;
  const isRu = lang === 'ru';

  return (
    <div className={`${style.langSwitch} ${theme}`} onClick={() => dispatch(changeLanguage())}>
      <div className={`${style['select-lang-en']} ${!isRu ? style.active : ''}`}>
        <RiTranslate2 className={`${style.icon}`} />
        {`${langsData[lang].menuSettings.enBtn}`}
      </div>
      <div className={`${style['select-lang-en']} ${isRu ? style.active : ''}`}>
        <RiTranslate2 className={`${style.icon}`} />
        {`${langsData[lang].menuSettings.ruBtn}`}
      </div>
    </div>
  );
}

