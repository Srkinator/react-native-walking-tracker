import React, { useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useTrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state: { tracks, loading }, fetchTracks } = useTrackContext();

  useEffect(() => {
    fetchTracks()
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <>
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};


const styles = StyleSheet.create({});

export default TrackListScreen;
