// import { useAction } from './useAction'
import { useTypesSelector } from './useTypesSelector'

import * as ActionCreators from '../store/schedule.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

// Application Hook Selector / Dispatch
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Selector
export const useSchedule = () => {
  const dispatch = useDispatch()
  const { getSchedule } = bindActionCreators(ActionCreators, dispatch)

  const { isLoading, schedule, error } = useTypesSelector((state) => state.scheduleState)
  return { isLoading, schedule, error, getSchedule }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
