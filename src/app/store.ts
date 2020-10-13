import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listReducer from '../components/list/listState'
import userReducer from '../components/user/userState'

export const store = configureStore({
  reducer: {
    users: listReducer,
    singleUser: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
