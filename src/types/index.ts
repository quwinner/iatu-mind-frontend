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
  time_start: string
  time_end: string
  group: string
  type: string
  cab: string
  discipline: string
  prepod: string
}

export interface ScheduleState {
  isLoading: boolean
  error: string | null
  schedule: Schedule[]
}

// =======================================================================================
// Store
// =======================================================================================

export interface RootState {
  appState: AppState
  scheduleState: ScheduleState
}
