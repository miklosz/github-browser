import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import fetchHandler from '../../app/fetch'
import { IUser } from '../../models/user.model'
import IError from '../../models/error.model'

interface SingleUserState {
  loading: boolean,
  data: IUser,
  error?: IError
}

const initialState: SingleUserState = {
  data: {} as IUser,
  loading: false,
};

export const userSlice = createSlice({
  name: 'singleUser',
  initialState,
  reducers: {
    getSingleUser: state => {
      state.loading = true
    },

    getSingleUserSuccess: (state, action: PayloadAction<IUser>)=> {
      state.loading = false
      state.data = action.payload
    },
    getSingleUserFailure: (state, action: PayloadAction<IError>) => {
      state.loading = false
      state.error = action.payload
    },
  },
});

export const fetchSingleUser = (login: string) => {
  return async ( dispatch : Dispatch ) => {
    dispatch(getSingleUser())

    // maybe just add the code from fetchHandler here?

    const fetchedData = await fetchHandler(`users/${login}`)
    if (fetchedData.error) { // if changed to string - pass payload here and actually show error
      dispatch(getSingleUserFailure(fetchedData.error))
    } else {
      dispatch(getSingleUserSuccess(fetchedData))
    }
  }
}

// actions
export const { getSingleUser, getSingleUserSuccess, getSingleUserFailure } = userSlice.actions

// selector (returns state like useState() )
export const selectUser = (state: RootState) => state.singleUser;

// reducer itself
export default userSlice.reducer;
