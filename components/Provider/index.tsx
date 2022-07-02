import { createContext, ReactNode } from 'react'

type Props = {
  value: any
  children: ReactNode
}

export const PropertiesContext = createContext(null)

export function PropertiesProvider({ value, children }: Props) {
  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  )
}
