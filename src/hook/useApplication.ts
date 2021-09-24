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

<<<<<<< HEAD
  const { isAsideOpen, isLoading, groups, groupNow, periods, periodNow, isGroupSelectorOpen, error } = useTypesSelector(
=======
  const { isAsideOpen, isLoad, groups, groupNow, periods, periodNow, isGroupSelectorOpen, error } = useTypesSelector(
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
    (state) => state.appState
  )
  return {
    isAsideOpen,
<<<<<<< HEAD
    isLoading,
=======
    isLoad,
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
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
<<<<<<< HEAD
=======
    periods,
    periodNow,
>>>>>>> 7a268f0b98919707a0bb59631e0343e18c2c5da7
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
