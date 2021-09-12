import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { AppState, Group, Period } from '../types'

import { GET_ALL_GROUPS } from '../component/Graphql/Queries'
import { apolloClient } from '..'

const initialState: AppState = {
  isLoading: false,
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

export const { openGroupSelector, closeGroupSelector, getAllGroups, setGroup, getAllPeriods, setPeriod } =
  appSlice.actions
export default appSlice.reducer

// Action
export function initApp() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      // const { data } = lazyQuery(GET_ALL_GROUPS)
      // dispatch(getAllGroups(data))
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

      // dispatch(setPeriod(groups.find((x: any) => x.id === group)))

      console.log('initApp')
    } catch (e) {
      console.log(e, 'initApp')
    } finally {
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
