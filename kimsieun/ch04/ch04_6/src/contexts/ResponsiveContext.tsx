import type { FC, PropsWithChildren } from 'react'
import { createContext } from 'react'


type ContextType = {
  breakpoint: string
}

const defaultContextValue ContextType = {
  breakpoint: ''
}

export const ResponsiveContext = createContext<ContextType>(defaultContextValue)

type ResponsiveContext = createContext<ContextType>(defaultContextValue)
export const ResponsiveProvider: FC<PropsWithChildren<ResponsiveProviderProps>> = ({
  children,
  ...props
}) => {
  const breakpoint = 'sm'
  const value = {
    breakpoint
  }
  return <ResponsiveContext.Provider value={value} children={children}/>
}