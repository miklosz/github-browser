import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IUser } from '../../models/user.model'
import IError from '../../models/error.model'
import fetchHandler from '../../app/fetch'

// import testData from '../../tests/testData.json'

/* TODO 
Implement pagination using link-headers
https://developer.github.com/v3/#link-header
*/

interface ListState {
  users: IUser[],
  pagination: {
    page: number,
    firstId: number,
    lastId: number
    perPage: number
  },
  loading: boolean,
  error?: IError,
  nextPageLink?: string
}

const initialState: ListState = {
  users: [] as IUser[],
  pagination: {
    page: 1,
    firstId: 1,
    lastId: 0, // that's unknown initially - not always firstId + 30 (gaps in id's)
    perPage: 30,
  },
  loading: false,

};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getUsers: state => {
      state.loading = true
    },
    getUsersSuccess: (state, action: PayloadAction<IUser[]>) => {
      state.loading = false
      state.users = action.payload
    },
    getUsersFailure: (state, action: PayloadAction<IError>) => {
      state.loading = false
      state.error = action.payload
    },
    nextPage: state => {
      // state.users = [nextPageUsers]
      state.pagination.page = state.pagination.page + 1
    },
    prevPage: state => {
      // state.users = [prevPageUsers]
      state.pagination.page = state.pagination.page - 1
    }
  },
});

export const fetchUsersList = () => {
  return async (dispatch : Dispatch) => {
    dispatch(getUsers())

    const fetchedData = await fetchHandler('users')
    if (fetchedData.error) { // if changed to string - pass payload here and actually show errors
      dispatch(getUsersFailure(fetchedData.error))
    } else {
      dispatch(getUsersSuccess(fetchedData))
    }
  }
}

// actions
export const { getUsers, getUsersSuccess, getUsersFailure, nextPage, prevPage } = listSlice.actions

// selector (returns state like useState() )
export const selectList = (state: RootState) => state.users;

// reducer itself
export default listSlice.reducer;
