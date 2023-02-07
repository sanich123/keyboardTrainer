import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { useThemeLang } from '../../../utils/hooks/use-theme-lang/use-theme-lang';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { changeTheme } from '../../../redux/global-state/global-state';
import { LANG_VALUES } from '../../../utils/const';
import { langsData } from '../LangSwitch/langsData';
import style from './ThemeSwitch.module.scss';

export default function ThemeSwitch() {
  const { dispatch, isRu, isLight }: { dispatch: Dispatch<AnyAction>; isRu: boolean; isLight: boolean; } = useThemeLang();
  const { ru, en } = LANG_VALUES;
  const lang = isRu ? ru : en;

  return (
    <div className={style.ThemeSwitch} onClick={() => { dispatch(changeTheme()); }}>
      <div className={`${style['select-theme-light']} ${isLight ? style.active : ''}`}>
        <RiSunFill className={`${style.icon}`} />
        {`${langsData[lang].menuSettings.lightBtn}`}
      </div>
      <div className={`${style['select-theme-dark']} ${!isLight ? style.active : ''}`}>
        <RiMoonFill className={`${style.icon}`} />
        {`${langsData[lang].menuSettings.darkBtn}`}
      </div>
    </div>
  );
}

