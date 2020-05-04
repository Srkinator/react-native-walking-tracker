import React from 'react'
import MapView, { Polyline, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';


const Map = ({ currentLocation, locations }) => {

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return <View>
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />

      <Polyline coordinates={locations.map(loc => loc.coords)} />
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
    height: 300,
  },
});

export default Map;