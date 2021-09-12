// =======================================================================================
// Store

// =======================================================================================
// App
// =======================================================================================

export interface AppState {
  isLoading: boolean
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
  schedule: Schedule[]
}

// =======================================================================================
// Root
// =======================================================================================

// export interface RootState {
//   appState: AppState
//   scheduleState: ScheduleState
// }

// =======================================================================================

export interface Schedule {
  dayName: string
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
