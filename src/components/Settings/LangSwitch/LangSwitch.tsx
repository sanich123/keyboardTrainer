import { changeLanguage } from '../../../redux/global-state/global-state';
import { langsData } from './langsData';
import { RiTranslate2 } from 'react-icons/ri';
import { LANG_VALUES } from '../../../utils/const';
import { SettingsProps } from '../Settings';
import style from './LangSwitch.module.scss';

export default function LangSwitch({ dispatch, lang }: SettingsProps) {
  const isRu = lang === LANG_VALUES.ru;
  const { enBtn, ruBtn } = langsData[lang].menuSettings;
  return (
    <div className={`${style.LangSwitch}`} onClick={() => dispatch(changeLanguage())}>
      <div className={`${style.selectLangEn} ${!isRu ? style.active : ''}`}>
        <RiTranslate2 className={`${style.icon}`} />
        {`${enBtn}`}
      </div>
      <div className={`${style.selectLangEn} ${isRu ? style.active : ''}`}>
        < RiTranslate2 className={`${style.icon}`} />
        {`${ruBtn}`}
      </div >
    </div >
  );
}

