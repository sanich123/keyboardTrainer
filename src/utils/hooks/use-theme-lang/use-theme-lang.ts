import { useDispatch, useSelector } from 'react-redux';
import { GlobalStateType } from '../../../redux/global-state/global-state';
import { LANG_VALUES, THEME_VALUES } from '../../const';
import { applyToLocalStorage, LS_KEYS } from '../../local-storage';

export function useThemeLang() {
  const dispatch = useDispatch();
  const { theme, language, authorization } = useSelector(({ globalState }: { globalState: GlobalStateType }) => globalState);
  applyToLocalStorage(LS_KEYS.globalState, { theme, language, authorization });
  const isRu = language === LANG_VALUES.ru;
  const isLight = theme === THEME_VALUES.light;

  return {
    dispatch, isRu, isLight,
  };
}
