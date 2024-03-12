import AppRouter from './AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import '../scss/styles/index.scss'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
