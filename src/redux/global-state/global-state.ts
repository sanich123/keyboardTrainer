import { createSlice } from '@reduxjs/toolkit';
import { LANG_VALUES, REDUCER_NAMES, THEME_VALUES } from '../../utils/const';
import { getFromLocalStorage, LS_KEYS } from '../../utils/local-storage';

export type GlobalStateType = {
  authorization: boolean,
  theme: string,
  language: string,
}

const globalState = createSlice({
  name: REDUCER_NAMES.globalState,
  initialState: getFromLocalStorage(LS_KEYS.globalState) ?? {
    authorization: false,
    theme: THEME_VALUES.light,
    language: LANG_VALUES.ru,
  },
  reducers: {
    changeTheme: (state) => {
      state.theme = (state.theme === THEME_VALUES.dark) ? THEME_VALUES.light : THEME_VALUES.dark;
    },
    changeLanguage: (state) => {
      state.language = (state.language === LANG_VALUES.ru) ? LANG_VALUES.en : LANG_VALUES.ru;
    },
    changeAuthorization: (state) => {
      state.authorization = !state.authorization;
    },
  },
});

export const { changeTheme, changeLanguage, changeAuthorization } = globalState.actions;
export default globalState.reducer;
