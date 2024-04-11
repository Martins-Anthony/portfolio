import { configureStore } from '@reduxjs/toolkit'
import signInReducer from '../../containers/Forms/Connection/SignIn/signInSlice'
import postProjectReducer from '../../containers/Forms/PostProject/postProjectSlice'
import getProjectsReducer from '../../containers/Forms/GetProjects/getProjectsSlice'
import contactReducer from '../../containers/Forms/Contact/contactSlice'
import modalReducer from '../../containers/Modal/modalSlice'
import putProjectReducer from '../../containers/Forms/PutProject/putProjectSlice'

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {}

export const store = configureStore({
  devTools: true,
  preloadedState: persistedState,
  reducer: {
    signIn: signInReducer,
    postProject: postProjectReducer,
    getProjects: getProjectsReducer,
    putProject: putProjectReducer,
    email: contactReducer,
    modal: modalReducer
  }
})

store.subscribe(() => {
  const state = store.getState()
  sessionStorage.setItem('reduxState', JSON.stringify({ getProjects: state.getProjects }))
})
