import { useContext } from 'react'

import { useTrackContext } from '../context/TrackContext';
import { Context } from '../context/LocationContext';

const useSaveTrack = (navigation) => {
  const { createTrack } = useTrackContext();
  const {
    state: { locations, name },
    reset
  } = useContext(Context);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigation.navigate('TrackList');
  };

  return {
    saveTrack
  };
};


export default useSaveTrack;