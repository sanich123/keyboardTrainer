import { LANG_VALUES, THEME_VALUES } from '../utils/const';

const user = {
  nickname: 'johndoe@me.com',
};

export const authorized = {
  isAuthenticated: true,
  user,
  isLoading: false,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
};

export const isLoading = {
  isAuthenticated: false,
  user,
  isLoading: true,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
};

export const nonAuthorized = {
  isAuthenticated: false,
  user,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
};

export const initialState = {
  authorization: false,
  theme: THEME_VALUES.light,
  language: LANG_VALUES.ru,
};

export const fakeResponse = { 'name': 'aovoronin.piano@gmail.com', 'averageSpeed': '400.60000', 'averageMistakes': '598.04000', 'amountOfRaces': 5, 'firstRace': '2002-09-01T00:00:00.000Z', 'lastTenRaces': [{ '_id': '63e7a35d0203a14b846048c4', 'name': 'aovoronin.piano@gmail.com', 'date': '2002-09-01T00:00:00.000Z', 'speed': 353, 'mistakes': 2987, '__v': 0 }, { '_id': '63e36ee8253d40f78567ffda', 'name': 'aovoronin.piano@gmail.com', 'date': '2002-12-09T00:00:00.000Z', 'speed': 287, 'mistakes': 0.3, '__v': 0 }, { '_id': '63e36efc253d40f78567ffdc', 'name': 'aovoronin.piano@gmail.com', 'date': '2002-12-09T00:00:00.000Z', 'speed': 287, 'mistakes': 0.3, '__v': 0 }, { '_id': '63e36f06253d40f78567ffde', 'name': 'aovoronin.piano@gmail.com', 'date': '2002-12-09T00:00:00.000Z', 'speed': 287, 'mistakes': 0.3, '__v': 0 }, { '_id': '63e37009050104678b3c69a9', 'name': 'aovoronin.piano@gmail.com', 'date': '2002-12-09T00:00:00.000Z', 'speed': 789, 'mistakes': 2.3, '__v': 0 }] };
