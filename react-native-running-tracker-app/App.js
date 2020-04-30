import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import useAuth from './src/hooks/useAuth'
import { navigationRef } from './src/navigationRef'
import { AuthContext } from './src/context/AuthContext'

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const TrackListFlow = props => <Stack.Navigator>
  <Stack.Screen name="TrackList" component={TrackListScreen} />
  <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
</Stack.Navigator>



export default () => {
  const authHookObj = useAuth()
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <AuthContext.Provider value={authHookObj}>
            {authHookObj.state.token
              ? <React.Fragment>
                <BottomTab.Navigator>
                  <BottomTab.Screen
                    name="TrackListFlow"
                    component={TrackListFlow}
                    options={() => ({
                      title: 'Tracks',
                      tabBarIcon: _ => <FontAwesome name="th-list" size={20} />
                    })}
                  />
                  <BottomTab.Screen
                    name="TrackCreate"
                    component={TrackCreateScreen}
                  />
                  <BottomTab.Screen
                    name="Account"
                    component={AccountScreen}
                  />
                </BottomTab.Navigator>
              </React.Fragment>
              : <Stack.Navigator initialRouteName="Signup">
                <Stack.Screen
                  name="Signup"
                  component={SignupScreen}
                  options={() => ({
                    header: _ => null
                  })}
                />
                <Stack.Screen
                  name="Signin"
                  component={SigninScreen}
                  options={() => ({
                    header: _ => null
                  })}
                />
              </Stack.Navigator>
            }
      </AuthContext.Provider>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};