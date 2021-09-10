// import { useAction } from './useAction'
import { useTypesSelector } from './useTypesSelector'

import * as ActionCreators from '../store/app.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

// Application Hook Selector / Dispatch
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Selector
export const useApplication = () => {
  const dispatch = useDispatch()
  const { initApp } = bindActionCreators(ActionCreators, dispatch)

  const { isLoading, error } = useTypesSelector((state) => state.appState)
  return { isLoading, error, initApp }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
