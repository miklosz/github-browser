import { createSlice, PayloadAction, Dispatch, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IUser } from '../../models/user.model'
import IError from '../../models/error.model'
import fetchHandler from '../../app/fetch'

import testData from '../../tests/testData.json'


export interface IListPage {
  pageNumber: number,
  users: IUser[],
  firstId: number,
  lastId: number | undefined,
  nextPageLink?: string
}


export interface IListState {
  currentPage: number,
  loading: boolean,
  error?: IError,
  pages: IListPage[]
}

const initialState: IListState = {
  currentPage: 0,
  pages: [],
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
      state.pages.push({
        users: action.payload,
        firstId: action.payload[0].id,
        lastId: action.payload[action.payload.length - 1].id,
        pageNumber: state.pages.length
      })
      state.currentPage = state.pages.length - 1
    },
    getUsersFailure: (state, action: PayloadAction<IError>) => {
      state.loading = false
      state.error = action.payload
    },
    nextPage: (state) => {
      state.currentPage = state.currentPage + 1
    },
    prevPage: (state) => {
      state.currentPage = state.currentPage - 1
    },
    setPage: (state, action: PayloadAction<number>) =>{
      state.currentPage = action.payload
      state.loading = false
    }
  },
});


const checkIfPageExists = (pageNumber : number, state: RootState ) => {
  return state.users.pages.find(p => p.pageNumber === pageNumber) !== undefined
}

export const fetchUsersList = (requestedPage = 0) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(getUsers())
    const state = getState()

    if (!checkIfPageExists(requestedPage, state)) {
      const since =  state.users.pages[state.users.currentPage]
        ? state.users.pages[state.users.currentPage].lastId
        : 0
      const fetchedData = await fetchHandler(`users?since=${since}`)
      if (fetchedData.error) {
        dispatch(getUsersFailure(fetchedData.error))
      } else {
        dispatch(getUsersSuccess(fetchedData))
      }
    }
    else {
      dispatch(setPage(requestedPage))
    }

  }
}

// actions
export const { getUsers, getUsersSuccess, getUsersFailure, nextPage, prevPage, setPage } = listSlice.actions

// selector (returns state like useState() )
// const getFirstIdOnPage = (page: number, state: RootState) => {
//   state.users.pages[]
// }



export const selectList = (state: RootState) => {
  return ({
    //users: state.users.pages[state.users.currentPage].users,
    users: state.users.pages ? state.users.pages[state.users.currentPage]?.users : undefined,
    currentPage: state.users.currentPage,
    loading: state.users.loading,
    error: state.users.error
  })
} 

// reducer itself
export default listSlice.reducer;