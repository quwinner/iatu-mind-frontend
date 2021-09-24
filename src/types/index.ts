// =======================================================================================
// Store

// =======================================================================================
// App
// =======================================================================================

export interface AppState {
<<<<<<< HEAD
  isLoading: boolean
=======
  isLoad: boolean
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
  isAsideOpen: boolean
  isGroupSelectorOpen: boolean

  groups: Group[]
  groupNow: Group

  periods: Period[]
  periodNow: Period

  error: string | null
}

// =======================================================================================
// Schedule
// =======================================================================================

export interface ScheduleState {
  isLoading: boolean
  error: string | null

  daySkip: number

  nowPair: Schedule[]
  nextPair: Schedule[]

  schedule: Schedule[]
}

// =======================================================================================
<<<<<<< HEAD
=======
// User
// =======================================================================================

export interface UserState {
  isLoggedIn: boolean
  user: User
  error: any
}

export interface User {
  id: string
  login: string
  password?: string
  dateReg: Date
  lastLogin: Date
  role: string
}

// =======================================================================================
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
// Root
// =======================================================================================

// export interface RootState {
//   appState: AppState
//   scheduleState: ScheduleState
// }

// =======================================================================================

<<<<<<< HEAD
=======
// =======================================================================================
// Different types
// =======================================================================================

>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
export interface Schedule {
  timeWait?: number
  date: string | Date
  timeStart: string
  timeStop: string
  discipline: string
  cabinet: string
  teacher: string
  type: string
  subgroup: string
}

export interface Group {
  id: number
  name: string
}

export interface Period {
  id: number
  year: Date
  half: number
}
<<<<<<< HEAD
=======

export interface SignUpQL {
  firstName: string
  lastName: string
  email: string
  login: string
  password: string
  rePassword: string
}

export interface SignInQL {
  login: string
  password: string
}
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
