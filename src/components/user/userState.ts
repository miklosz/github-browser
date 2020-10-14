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
  userRepos?: IRepo[]
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
    getReposSuccess: (state, action: PayloadAction<IRepo[]>)=> {
      state.loading = false
      state.userRepos = action.payload
    },
    getReposFailure: (state, action: PayloadAction<IRepo[]>) => {
      state.loading = false
      state.userRepos = action.payload
    },
  },
});

export const fetchSingleUser = (login: string) => {
  return async ( dispatch : Dispatch ) => {
    dispatch(getSingleUser())
    const fetchedData = await fetchHandler(`users/${login}`)
    if (fetchedData.error) {
      dispatch(getSingleUserFailure(fetchedData.error))
    } else {
      dispatch(getSingleUserSuccess(fetchedData))
    }
  }
}

export const fetchRepos = (login: string) => {
  return async ( dispatch : Dispatch ) => {
    dispatch(getRepos())
    const fetchedData = await fetchHandler(`users/${login}/repos`)
    if (fetchedData.error) {
      dispatch(getReposFailure(fetchedData.error))
    } else {
      dispatch(getReposSuccess(fetchedData))
    }
  }
}

// actions
export const { 
  getSingleUser,
  getSingleUserSuccess,
  getSingleUserFailure,
  getRepos,
  getReposSuccess,
  getReposFailure
} = userSlice.actions

// selector (returns state like useState() )
export const selectUser = (state: RootState) => state.singleUser;
export const selectRepos = (state: RootState) => state.singleUser.userRepos;

// reducer itself
export default userSlice.reducer;
