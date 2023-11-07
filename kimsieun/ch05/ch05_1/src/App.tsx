import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

import ReduxClock from './pages/ReduxClock' 
import UseReduxClock from './pages/UseReduxClock' 


export default function App() {
  const store = useStore()
   return (
    <ReduxProvider store={store}>
     <main className='p-8'>
       <UseReduxClock /> 
       <ReduxClock /> 
      </main>
    </ReduxProvider>
    ) 
  }