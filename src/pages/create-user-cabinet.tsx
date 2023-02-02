import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, changeTheme, GlobalStateType } from '../redux/global-state/global-state';
import { LANG_VALUES, THEME_VALUES } from '../utils/const';
import { applyToLocalStorage, LS_KEYS } from '../utils/local-storage';

export default function CreateUserCabinet() {
  const dispatch = useDispatch();
  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  const isRu = language === LANG_VALUES.ru;
  const isLight = theme === THEME_VALUES.light;
  return (
    <div style={{ background: `${isLight ? 'grey' : 'blue'}` }}>
      <button type="button" onClick={() => dispatch(changeTheme())}>
        {isRu ? 'Поменять тему' : 'Change theme'}
      </button>
      <button type="button" onClick={() => dispatch(changeLanguage())}>
        {isRu ? 'Поменять язык' : 'Change language'}
      </button>
    </div>
  );
}
