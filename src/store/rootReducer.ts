import { combineReducers, Reducer } from 'redux'

import appReducer from './app.slice'
import scheduleReducer from './schedule.slice'
import userReducer from './user.slice'

export const rootReducer = combineReducers({
  appState: appReducer,
  scheduleState: scheduleReducer,
  userState: userReducer,
})

// export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
//   appState: appReducer,
//   scheduleState: scheduleReducer,
// })

export type RootState = ReturnType<typeof rootReducer>
