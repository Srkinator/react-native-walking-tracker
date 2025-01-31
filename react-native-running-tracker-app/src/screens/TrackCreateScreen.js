import '../_mockLocation'
import React, {
  useEffect,
  useState,
  useContext,
  useCallback
} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

import Map from '../components/Map';
import { Context } from '../context/LocationContext'
import usePermissions from '../hooks/usePermissions';
import TrackForm from '../components/TrackForm'



const TrackCreateScreen = ({ navigation }) => {
  const { addLocation, state: { recording, currentLocation, locations } } = useContext(Context)
  const isFocused = useIsFocused()

  const callback = useCallback(
    location => {
      addLocation(location);
    },
    [recording]
  );

  const [err] = usePermissions(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <View>
        <Map
          currentLocation={currentLocation}
          locations={locations}
        />
        {err && <Text>{err}</Text>}
        <TrackForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;