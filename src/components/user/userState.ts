import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import fetchHandler from '../../app/fetch'
import { IUser } from '../../models/user.model'
import { IError } from '../../models/error.model'
import { IRepo } from '../../models/repo.model'

interface SingleUserState {
  loading: boolean,
  currentUser: IUser,
  error?: IError,
  userRepos?: IRepo
}

const initialState: SingleUserState = {
  currentUser: {} as IUser,
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
      state.currentUser = action.payload
    },
    getSingleUserFailure: (state, action: PayloadAction<IError>) => {
      state.loading = false
      state.error = action.payload
    },
    getRepos: state => {
      state.loading = true
    },
    getReposSuccess: (state, action: PayloadAction<IRepo>)=> {
      state.loading = false
      state.userRepos = action.payload
    },
    getReposFailure: (state, action: PayloadAction<IRepo>) => {
      state.loading = false
      state.userRepos = action.payload
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
