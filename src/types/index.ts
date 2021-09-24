// =======================================================================================
// Store

// =======================================================================================
// App
// =======================================================================================

export interface AppState {
  isLoad: boolean
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
// Root
// =======================================================================================

// export interface RootState {
//   appState: AppState
//   scheduleState: ScheduleState
// }

// =======================================================================================

// =======================================================================================
// Different types
// =======================================================================================

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

export interface Disciplines {
  id: number
  name: string
}
