import axios from 'axios'
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { AppState } from '../types'

const initialState: AppState = {
  isLoading: false,
  error: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const {} = appSlice.actions
export default appSlice.reducer

// Action
export function initApp() {
  return async (dispatch: Dispatch, getState: () => {}) => {
    try {
      console.log('initApp')
    } catch (e) {
    } finally {
    }
  }
}
