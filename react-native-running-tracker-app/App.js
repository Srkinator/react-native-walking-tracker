import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const Stack = createStackNavigator();



export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          name="TrackDetails"
          component={TrackDetailScreen}
        />
        <Stack.Screen
          name="TrackList"
          component={TrackListScreen}
        />
        <Stack.Screen
          name="TrackCreate"
          component={TrackCreateScreen}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};