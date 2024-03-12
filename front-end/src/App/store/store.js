import { configureStore } from '@reduxjs/toolkit'
import signInReducer from '../../containers/Forms/Connection/SignIn/signInSlice'
import addProjectReducer from '../../containers/Forms/Add/addSlice'

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: {
    signIn: signInReducer,
    addProject: addProjectReducer
  }
})

store.subscribe(() => {
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
