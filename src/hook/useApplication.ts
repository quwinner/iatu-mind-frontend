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
  const { openAside, closeAside, initApp, closeGroupSelector, openGroupSelector, changeGroup, changePeriod } =
    bindActionCreators(ActionCreators, dispatch)

  const { isAsideOpen, isLoading, groups, groupNow, periods, periodNow, isGroupSelectorOpen, error } = useTypesSelector(
    (state) => state.appState
  )
  return {
    isAsideOpen,
    isLoading,
    groups,
    groupNow,
    isGroupSelectorOpen,
    error,
    initApp,
    openAside,
    closeAside,
    closeGroupSelector,
    openGroupSelector,
    changeGroup,
    changePeriod,
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
