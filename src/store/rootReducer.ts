import { combineReducers, Reducer } from 'redux'

import appReducer from './app.slice'
import scheduleReducer from './schedule.slice'
<<<<<<< HEAD
=======
import userReducer from './user.slice'
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7

export const rootReducer = combineReducers({
  appState: appReducer,
  scheduleState: scheduleReducer,
<<<<<<< HEAD
=======
  userState: userReducer,
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
})

// export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
//   appState: appReducer,
//   scheduleState: scheduleReducer,
// })

export type RootState = ReturnType<typeof rootReducer>
