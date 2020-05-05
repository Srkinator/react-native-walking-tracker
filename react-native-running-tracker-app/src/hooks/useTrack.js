import { useReducer } from 'react'

import axios from '../api/axios';


const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};


const useTrack = () => {
  const [state, dispatch] = useReducer(trackReducer, {})

  const fetchTracks = async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data });
  };

  const createTrack = async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
  };

  return {
    state,
    fetchTracks,
    createTrack
  }
}


export default useTrack