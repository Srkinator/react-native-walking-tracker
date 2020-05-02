import React from 'react'
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';


const Map = ({ currentLocation, locations }) => {

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return <View style={styles.container}>
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
    </MapView>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;