import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { AppState, Group, Period } from '../types'

import { GET_ALL_GROUPS, GET_ALL_PERIODS } from '../component/Graphql/Queries'
import { apolloClient } from '..'
import { AUTH } from '../component/Graphql/Mutation'
import { setUserSetting } from './user.slice'

const initialState: AppState = {
  isLoad: false,
  isAsideOpen: false,
  isGroupSelectorOpen: false,

  groups: [],
  groupNow: {} as Group,

  periods: [],
  periodNow: {} as Period,

  error: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appInit: (state) => {
      state.isLoad = true
    },
    openAside: (state) => {
      state.isAsideOpen = true
    },
    closeAside: (state) => {
      state.isAsideOpen = false
    },
    openGroupSelector: (state) => {
      state.isGroupSelectorOpen = true
    },
    closeGroupSelector: (state) => {
      state.isGroupSelectorOpen = false
    },
    getAllGroups: (state, { payload }: PayloadAction<Group[]>) => {
      state.groups = payload
    },
    setGroup: (state, { payload }: PayloadAction<Group>) => {
      state.groupNow = payload
    },
    getAllPeriods: (state, { payload }: PayloadAction<Period[]>) => {
      state.periods = payload
    },
    setPeriod: (state, { payload }: PayloadAction<Period>) => {
      state.periodNow = payload
    },
  },
})

export const {
  appInit,
  openAside,
  closeAside,
  openGroupSelector,
  closeGroupSelector,
  getAllGroups,
  setGroup,
  getAllPeriods,
  setPeriod,
} = appSlice.actions
export default appSlice.reducer

// Action
export function initApp() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      const token = localStorage.getItem('jwt')
      apolloClient
        .mutate({
          mutation: AUTH,
          context: {
            headers: {
              authorization: token ? `Bearer ${token}` : '',
            },
          },
        })
        .then(({ data }) => {
          dispatch(setUserSetting(data.auth.user))
          localStorage.setItem('jwt', data.auth.token)
        })
        .catch((error) => {
          console.log('error', error)
          localStorage.removeItem('jwt')
        })

      const { data } = await apolloClient.query({
        query: GET_ALL_GROUPS,
      })

      let groups = [...data.groups]

      groups.sort((x: Group, y: Group) => {
        const xP = x.name?.split('-')
        const yP = y.name?.split('-')

        if (xP[1] === undefined || yP[1] === undefined) return 0
        return xP[1] > yP[1] ? 1 : -1
      })

      const group = parseInt(localStorage.getItem('groupNow') || '65')
      const period = parseInt(localStorage.getItem('periodNow') || '1')

      dispatch(setGroup(groups.find((x: any) => x.id === group)))
      dispatch(getAllGroups(groups))
      const periods = await apolloClient.query({
        query: GET_ALL_PERIODS,
      })

      dispatch(setPeriod(periods.data.periods.find((x: any) => x.id === period)))
      dispatch(getAllPeriods(periods.data.periods))
    } catch (e) {
      console.log(e, 'initApp')
    } finally {
      dispatch(appInit())
    }
  }
}

export function changeGroup(group: Group) {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      localStorage.setItem('groupNow', group.id.toString())
      dispatch(setGroup(group))
    } catch (e) {
      console.log(e, 'changeGroup')
    } finally {
    }
  }
}

export function changePeriod(period: Period) {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      localStorage.setItem('periodNow', period.id.toString())
      dispatch(setPeriod(period))
    } catch (e) {
      console.log(e, 'changePeriod')
    } finally {
    }
  }
}
