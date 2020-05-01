import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Map />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;