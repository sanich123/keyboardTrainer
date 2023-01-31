import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { jsonPlaceholderAPI } from './json-placeholder-API';
import incrementDecrement from './increment-decrement/increment-decrement';

const rootReducer = combineReducers({
  [jsonPlaceholderAPI.reducerPath]: jsonPlaceholderAPI.reducer,
  incrementDecrement: incrementDecrement,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(jsonPlaceholderAPI.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
