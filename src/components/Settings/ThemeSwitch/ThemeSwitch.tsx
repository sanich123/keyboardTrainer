import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { changeTheme } from '../../../redux/global-state/global-state';
import { langsData } from '../LangSwitch/langsData';
import { SettingsProps } from '../../../utils/types/types';
import { THEME_VALUES } from '../../../utils/const';
import style from './ThemeSwitch.module.scss';

export default function ThemeSwitch({ dispatch, theme, lang }: SettingsProps) {
  const isLight = theme === THEME_VALUES.light;
  document.body.className = theme;

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

