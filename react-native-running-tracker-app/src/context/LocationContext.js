import React, { createContext } from 'react'

import useLocation from '../hooks/useLocation'

export const Context = createContext()

const LocationContext = ({ children }) => {
  const useLocationHookObj = useLocation()

  return <Context.Provider value={useLocationHookObj}>
    {children}
  </Context.Provider>

}


export default LocationContext;
