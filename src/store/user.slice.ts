import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { apolloClient } from 'src'
import { SIGNUP } from 'src/component/Graphql/Mutation'

import { UserState, User } from '../types'

const initialState: UserState = {
  isLoggedIn: false,
  user: {} as User,
  error: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSetting: (state, { payload }: PayloadAction<any>) => {},
    removeUserSetting: (state, { payload }: PayloadAction<any>) => {},
  },
})

export const { setUserSetting, removeUserSetting } = userSlice.actions
export default userSlice.reducer

// Action
///////////////////////////////////////////////////////////////////////////////////////////////////

export function signIn() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      //   const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/timetable/week`, {
      //     params: {
      //       group: group.name,
      //       day,
      //     },
      //   })
    } catch (e) {
      console.log('signIn', e)
    } finally {
    }
  }
}

export function signUp() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      const { data, errors } = await apolloClient.mutate({
        mutation: SIGNUP,
        variables: {
          name: 'name',
          username: 'userName',
          password: 'password',
        },
      })
    } catch (e) {
      console.log('signUp', e)
    } finally {
    }
  }
}

export function logOut() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
    } catch (e) {
      console.log('logOut', e)
    } finally {
    }
  }
}

// Authorization
export function auth() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
    } catch (e) {
      console.log('auth', e)
    } finally {
    }
  }
}
