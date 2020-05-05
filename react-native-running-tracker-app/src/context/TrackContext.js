import React, {
  createContext,
  useContext
} from 'react'

import useTrack from '../hooks/useTrack'

export const Context = createContext()

const TrackContext = ({ children }) => {
  const useTrackHookObj = useTrack()

  return <Context.Provider value={useTrackHookObj}>
    {children}
  </Context.Provider>

}

export const useTrackContext = () => useContext(Context)

export default TrackContext;
