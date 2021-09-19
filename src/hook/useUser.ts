import { useTypesSelector } from './useTypesSelector'

import * as ActionCreators from '../store/user.slice'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

// Application Hook Selector / Dispatch
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Selector
export const useUser = () => {
  const dispatch = useDispatch()
  const { signIn, logOut, removeUserSetting, setUserSetting, auth, signUp } = bindActionCreators(
    ActionCreators,
    dispatch
  )

  const { isLoggedIn, user } = useTypesSelector((state) => state.userState)
  return {
    isLoggedIn,
    user,
    signIn,
    logOut,
    removeUserSetting,
    setUserSetting,
    auth,
    signUp,
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
