import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { changeTheme } from '../../../redux/global-state/global-state';
import { langsData } from '../LangSwitch/langsData';
import { THEME_VALUES } from '../../../utils/const';
import style from './ThemeSwitch.module.scss';
import themes from './themes.module.scss';
import { SettingsProps } from '../Settings';

export default function ThemeSwitch({ dispatch, theme, lang }: SettingsProps) {
  const { lightBtn, darkBtn } = langsData[lang].menuSettings;
  const isLight = theme === THEME_VALUES.light;
  document.body.className = themes[theme];

  return (
    <div className={style.ThemeSwitch} onClick={() => { dispatch(changeTheme()); }}>
      <div className={`${style['select-theme-light']} ${isLight ? style.active : ''}`}>
        <RiSunFill className={`${style.icon}`} />
        {`${lightBtn}`}
      </div>
      <div className={`${style['select-theme-dark']} ${!isLight ? style.active : ''}`}>
        <RiMoonFill className={`${style.icon}`} />
        {`${darkBtn}`}
      </div>
    </div>
  );
}

