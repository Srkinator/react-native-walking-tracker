
import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AuthContext from '../context/AuthContext';


const TrackListScreen = (props) => {
  const authContext = useContext(AuthContext)
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;