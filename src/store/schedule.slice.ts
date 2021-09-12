import axios from 'axios'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { Group, Schedule, ScheduleState } from '../types'

const initialState: ScheduleState = {
  isLoading: false,
  error: null,
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
  },
})

export const { reqeustShedule, receiveShedule } = scheduleSlice.actions
export default scheduleSlice.reducer

// Action
export function getSchedule(groups: Group) {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      dispatch(reqeustShedule())
      const { data } = await axios.get(`http://localhost:8081/timetable/${groups.name}`)
      dispatch(receiveShedule(data))
    } catch (e) {
      console.log('getSchedule', e)
    } finally {
    }
  }
}
