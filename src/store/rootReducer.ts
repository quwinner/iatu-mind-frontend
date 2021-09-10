import { combineReducers, Reducer } from 'redux'

import { RootState } from '../types'
import appReducer from './app.slice'
import scheduleReducer from './schedule.slice'

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  appState: appReducer,
  scheduleState: scheduleReducer,
})
