import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { apolloClient } from '../index'
import { SIGNUP } from '../component/Graphql/Mutation'

import { UserState, User, SignUpQL } from '../types'

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
    setErrors: (state, { payload }: PayloadAction<any>) => {
      state.error = payload
    },
  },
})

export const { setUserSetting, removeUserSetting, setErrors } = userSlice.actions
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

export function signUp(variables: SignUpQL, history: any) {
  return (dispatch: Dispatch, getState: () => {}) => {
    try {
      apolloClient
        .mutate({
          mutation: SIGNUP,
          variables: variables,
        })
        .then((result) => {
          history.push('/')
        })
        .catch((error) => {
          dispatch(setErrors(error?.graphQLErrors[0]?.extensions?.response))
        })
    } catch (e: any) {
      console.log('signUp', e)
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
