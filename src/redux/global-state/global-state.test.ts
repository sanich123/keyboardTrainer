import { initialState } from '../../tests/test-const';
import { LANG_VALUES, THEME_VALUES } from '../../utils/const';
import { getFromLocalStorage, LS_KEYS } from '../../utils/local-storage';
import globalState, { changeLanguage, changeTheme } from './global-state';

describe('Global-state reducer', () => {
  it('should correctly work with initial state', () => {
    expect(globalState(undefined, { type: undefined })).toStrictEqual(getFromLocalStorage(LS_KEYS.globalState) || []);
  });
  it('should correctly change theme', () => {
    expect(globalState(initialState, changeTheme())).toStrictEqual({
      authorization: false,
      theme: THEME_VALUES.dark,
      language: LANG_VALUES.ru,
    });
  });
  it('should correctly change language', () => {
    expect(globalState(initialState, changeLanguage())).toStrictEqual({
      authorization: false,
      theme: THEME_VALUES.light,
      language: LANG_VALUES.en,
    });
  });
});
