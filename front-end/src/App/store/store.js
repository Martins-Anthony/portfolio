import { configureStore } from '@reduxjs/toolkit'
import signInReducer from '../../containers/Forms/Connection/SignIn/signInSlice'
import postProjectReducer from '../../containers/Forms/PostProject/postProjectSlice'
import getProjectsReducer from '../../containers/Forms/GetProjects/getProjectsSlice'

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: {
    signIn: signInReducer,
    postProject: postProjectReducer,
    getProjects: getProjectsReducer
  }
})

store.subscribe(() => {
  sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
