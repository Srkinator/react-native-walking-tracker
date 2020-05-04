import { useReducer } from 'react'


const initialState = {
  currentLocation: null,
  recording: false,
  locations: []
}

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    case 'reset':
      return { ...state, name: '', locations: [] };
    default:
      return state;
  }
};

const useLocation = () => {
  const [state, dispatch] = useReducer(locationReducer, initialState)

  const changeName = name => {
    dispatch({ type: 'change_name', payload: name });
  };

  const startRecording = () => {
    dispatch({ type: 'start_recording' });
  };

  const stopRecording = () => {
    dispatch({ type: 'stop_recording' });
  };

  const addLocation = (location) => {
    dispatch({ type: 'add_current_location', payload: location });
    if (state.recording) {
      dispatch({ type: 'add_location', payload: location });
    }
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return {
    state,
    changeName,
    startRecording,
    stopRecording,
    addLocation,
    reset
  }

}


export default useLocation;
