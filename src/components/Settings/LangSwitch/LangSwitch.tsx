import { changeLanguage } from '../../../redux/global-state/global-state';
import { langsData } from './langsData';
import { RiTranslate2 } from 'react-icons/ri';
import style from './LangSwitch.module.scss';
import { SettingsProps } from '../../../utils/types/types';
import { LANG_VALUES } from '../../../utils/const';

export default function LangSwitch({ dispatch, lang }: SettingsProps) {
  const isRu = lang === LANG_VALUES.ru;

  return (
    <div className={`${style.LangSwitch}`} onClick={() => dispatch(changeLanguage())}>
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

