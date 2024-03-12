import { configureStore } from '@reduxjs/toolkit'
import signInReducer from '../../containers/SignIn/signInSlice'

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: {
    signIn: signInReducer
  }
})

store.subscribe(() => {
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
