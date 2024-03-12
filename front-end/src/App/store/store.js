import { configureStore } from '@reduxjs/toolkit'
import signInReducer from '../../containers/Forms/Connection/SignIn/signInSlice'
import postProjectReducer from '../../containers/Forms/PostProject/postProjectSlice'

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: {
    signIn: signInReducer,
    postProject: postProjectReducer
  }
})

store.subscribe(() => {
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
