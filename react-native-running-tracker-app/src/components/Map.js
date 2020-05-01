import React from 'react'
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const Map = props => {
  let test = []
  for(let i = 0; i < 20; i++) {
    test.push({
      longitude: -112.21214 + i * 0.001,
      latitude: 27.41235 + i * 0.001,
    })
  }
  return <View style={styles.container}>
    <Text>111</Text>
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        longitude: -112.21214,
        latitude: 27.41235,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={test} />
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