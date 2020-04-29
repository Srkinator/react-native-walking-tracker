import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <View>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;