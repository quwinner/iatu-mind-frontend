import axios from 'axios'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'

import { Schedule, ScheduleState } from '../types'

const initialState: ScheduleState = {
  isLoading: false,
  error: null,
  schedule: [],
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {},
})

export const {} = scheduleSlice.actions
export default scheduleSlice.reducer

// Action
export function getSchedule() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
    } catch (e) {
    } finally {
    }
  }
}
