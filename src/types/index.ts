// =======================================================================================
// App
// =======================================================================================

export interface AppState {
  isLoading: boolean
  error: string | null
}

// =======================================================================================
// Schedule
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

export interface ScheduleState {
  isLoading: boolean
  error: string | null
  schedule: Schedule[]
}

// =======================================================================================
// Store
// =======================================================================================

// export interface RootState {
//   appState: AppState
//   scheduleState: ScheduleState
// }
