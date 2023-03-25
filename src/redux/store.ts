import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { keyboardTrainerApi } from './keyboard-trainer-api';
import globalState from './global-state/global-state';

const rootReducer = combineReducers({
  [keyboardTrainerApi.reducerPath]: keyboardTrainerApi.reducer,
  globalState: globalState,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(keyboardTrainerApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
