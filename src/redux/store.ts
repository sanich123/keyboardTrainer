import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { guitarsApi } from './guitars-api';
import incrementDecrement from './increment-decrement/increment-decrement';

const rootReducer = combineReducers({
  [guitarsApi.reducerPath]: guitarsApi.reducer,
  incrementDecrement: incrementDecrement,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(guitarsApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
