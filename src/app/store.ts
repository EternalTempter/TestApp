import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { starshipApi } from './starship/starship.api';

export const store = configureStore({
  reducer: {
    [starshipApi.reducerPath]: starshipApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    starshipApi.middleware, 
  )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
