import { combineReducers, Reducer } from 'redux'

import appReducer from './app.slice'
import scheduleReducer from './schedule.slice'

export const rootReducer = combineReducers({
  appState: appReducer,
  scheduleState: scheduleReducer,
})

// export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
//   appState: appReducer,
//   scheduleState: scheduleReducer,
// })

export type RootState = ReturnType<typeof rootReducer>
