import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IUser } from '../../models/user.model'
import fetchHandler from '../../app/fetch'
import testData from '../../tests/testData.json'

interface SingleUserState {
  data: IUser,
  loading: boolean,
  errors: boolean // maybe change to array of errors later
}

const initialState: SingleUserState = {
  data: {} as IUser,
  loading: false,
  errors: false
};

export const userSlice = createSlice({
  name: 'singleUser',
  initialState,
  reducers: {
    getSingleUser: state => {
      state.loading = true
    },
    // OR? (state, action: PayloadAction<T>)
    getSingleUserSuccess: (state, { payload }) => {
      state.loading = true
      state.errors = false
      state.data = payload
    },
    getSingleUserFailure: (state, { payload }) => {
      state.loading = false
      state.errors = true
    },
  },
});

export const fetchSingleUser = (login) => {
  return async dispatch => {
    dispatch(getSingleUser())

    // maybe just add the code from fetchHandler here?

    const fetchedData = await fetchHandler(`users/${login}`)
    if (fetchedData.error) { // if changed to string - pass payload here and actually show errors
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
