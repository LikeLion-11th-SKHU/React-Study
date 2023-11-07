import ResponsiveContextTest from './pages/ResponsiveContextTest' 
import { ResponsiveContext, ResponsiveProvider } from './contexts'

export default function App() {
   return (
      <ResponsiveProvider> 
      <main>
        <ResponsiveContextTest />
      </main>
      </ResponsiveProvider> 
    ) 
  }