import React from 'react'
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const Map = props => {
  let test = []
  for(let i = 0; i < 20; i++) {
    test.push({
      longitude: props.initialRegion.longitude + i * 0.001,
      latitude: props.initialRegion.latitude + i * 0.001,
    })
  }
  return <View style={styles.container}>
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        ...props.initialRegion,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={test} />
    </MapView>
  </View>
}

Map.defaultProps = {
  longitude: -112.21214,
  latitude: 27.41235,
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