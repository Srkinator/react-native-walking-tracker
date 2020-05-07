import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';

import { useTrackContext } from '../context/TrackContext';


const TrackDetailScreen = ({ navigation, route }) => {
  const { state: { tracks } } = useTrackContext();
  const id = route.params.id;

  const track = tracks.find(t => t._id === id);

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;