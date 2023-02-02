import { createSlice } from '@reduxjs/toolkit';

export type GlobalStateType = {
  authorization: boolean,
  theme: string,
  language: string,
}

const globalState = createSlice({
  name: 'global-values',
  initialState: {
    authorization: false,
    theme: 'dark',
    language: 'ru',
  },
  reducers: {
    changeTheme: (state) => {
      state.theme === 'dark' ? state.theme = 'light' : state.theme = 'dark';
    },
    changeLanguage: (state) => {
      state.language === 'ru' ? state.language = 'en' : state.language = 'ru';
    },
    changeAuthorization: (state) => {
      state.authorization = !state.authorization;
    },
  },
});

export const {
  changeTheme, changeLanguage, changeAuthorization,
} = globalState.actions;

export default globalState.reducer;
