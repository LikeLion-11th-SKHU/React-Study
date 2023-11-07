import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'

const initialAppStore = () => {
  const store = configureStore({reducer: rootReducer, middleware: []})
  return store
}

export function useStore() {
  const store = useMemo(() => initialAppStore(), [])
  return store
}
