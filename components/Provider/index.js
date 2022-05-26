import { createContext } from 'react'

export const PropertiesContext = createContext(null)

export function PropertiesProvider({ value, children }) {
  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  )
}
