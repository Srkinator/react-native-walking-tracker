import React, {
  useEffect,
  useState
} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';


import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [])

  if (!location) {
    return null
  }

  return (
    <SafeAreaView>
      <View>
        <Map
          initialRegion={{
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          }}
        />
        {errorMsg && <Text>{errorMsg}</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;