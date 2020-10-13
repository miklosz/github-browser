import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IUserList } from '../../models/list.model'
import fetchHandler from '../../app/fetch'

import testData from '../../tests/testData.json'

/* TODO 
Implement pagination using link-headers
https://developer.github.com/v3/#link-header
*/

//temp for testing
const testUsers = testData.map(i => ({
  login: i.login,
  id: i.id,
  avatar_url: i.avatar_url,
  url: i.url,
  html_url: i.html_url
}))

interface ListState {
  users: Array<IUserList>,
  pagination: {
    page: number,
    firstId: number,
    lastId: number
    perPage: number
  },
  loading: boolean,
  errors: boolean // maybe change to array of errors later
}

const initialState: ListState = {
  users: [] as Array<IUserList>,
  pagination: {
    page: 1,
    firstId: 1,
    lastId: 0, // that's unknown initially - not always firstId + 30 (gaps in id's)
    perPage: 30
  },
  loading: false,
  errors: false
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getUsers: state => {
      state.loading = true
    },
    // OR? (state, action: PayloadAction<T>)
    // state.users = action.payload 
    getUsersSuccess: (state, { payload }) => {
      state.loading = true
      state.errors = false
      state.users = payload
    },
    getUsersFailure: (state, { payload }) => {
      state.loading = false
      state.errors = true
    },
    nextPage: state => {
      state.users = [testUsers]
      state.pagination.page = state.pagination.page + 1
    },
    prevPage: state => {
      state.users = [testUsers]
      state.pagination.page = state.pagination.page - 1
    }
  },
});

export const fetchUsersList = () => {
  return async dispatch => {
    dispatch(getUsers())

    // maybe just add the code from fetchHandler here?

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
