import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'
import ClockTest from './pages/ClockTest'
import CounterTest from './pages/CounterTest'
import RemoteUSer from './pages/RemoteUSer'
import CardsTest from './pages/CardsTest'



export default function App() {
  const store = useStore()
   return (
    <ReduxProvider store={store}>
      <CardsTest />
      <RemoteUSer />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
    ) 
  }