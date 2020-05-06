import { useReducer } from 'react'

import axios from '../api/axios';


const initialState = {
  tracks: [],
  loading: false
}

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks_request':
      return { ...state, loading: true };
    case 'fetch_tracks_success':
      return { ...state, loading: false, tracks: action.payload };
    case 'fetch_tracks_error':
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};


const useTrack = () => {
  const [state, dispatch] = useReducer(trackReducer, initialState)

  const fetchTracks = async () => {
    dispatch({ type: 'fetch_tracks_request' })
    try {
      const response = await axios.get('/tracks');
      dispatch({ type: 'fetch_tracks_success', payload: response.data });
    } catch (e) {
      dispatch({ type: 'fetch_tracks_error' })
    }
  };

  const createTrack = async (name, locations) => {
    await axios.post('/tracks', { name, locations });
  };

  return {
    state,
    fetchTracks,
    createTrack
  }
}


export default useTrack