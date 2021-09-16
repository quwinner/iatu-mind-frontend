import axios from 'axios'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { Group, Schedule, ScheduleState } from '../types'

const initialState: ScheduleState = {
  isLoading: false,
  error: null,

  daySkip: 0,

  nowPair: [],
  nextPair: [],

  schedule: [],
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    reqeustShedule: (state) => {
      state.isLoading = false
      state.schedule = []
    },
    receiveShedule: (state, { payload }: PayloadAction<Schedule[]>) => {
      state.isLoading = true
      state.schedule = payload
    },
    setDaySkip: (state, { payload }: PayloadAction<number>) => {
      state.daySkip = payload
    },
    setNextPair: (state, { payload }: PayloadAction<Schedule[]>) => {
      state.nextPair = payload
    },
    setNowPair: (state, { payload }: PayloadAction<Schedule[]>) => {
      state.nowPair = payload
    },
  },
})

export const { reqeustShedule, receiveShedule, setDaySkip, setNextPair, setNowPair } = scheduleSlice.actions
export default scheduleSlice.reducer

// Action
export function getScheduleWeek(group: Group, day: string) {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      dispatch(reqeustShedule())
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/timetable/week`, {
        params: {
          group: group.name,
          day,
        },
      })
      dispatch(receiveShedule(data))
    } catch (e) {
      console.log('getScheduleWeek', e)
    } finally {
    }
  }
}

export function getScheduleDay(group: Group, day: string) {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      dispatch(reqeustShedule())
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/timetable/day`, {
        params: {
          group: group.name,
          day,
        },
      })
      dispatch(receiveShedule(data))
    } catch (e) {
      console.log('getScheduleDay', e)
    } finally {
    }
  }
}

export function getNextPair(group: Group) {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      let nextUrl = `${process.env.REACT_APP_BACKEND_URL}/api/timetable/next`
      let nowUrl = `${process.env.REACT_APP_BACKEND_URL}/api/timetable/now`

      const requestNext = axios.get<any[]>(nextUrl, {
        params: {
          group: group.name,
        },
      })

      const requestNow = axios.get<any[]>(nowUrl, {
        params: {
          group: group.name,
        },
      })

      axios.all([requestNext, requestNow]).then(
        axios.spread((...responses) => {
          const nextPair = responses[0]?.data
          const nowPair = responses[1]?.data

          dispatch(setNextPair(nextPair))
          dispatch(setNowPair(nowPair))

          return
        })
      )
    } catch (e) {
      console.log('setNextPair', e)
    } finally {
    }
  }
}
