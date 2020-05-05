import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthContext from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const listener = navigation.addListener('focus', _ => {
      clearErrorMessage()
    })
    return listener
  }, [navigation])

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        clearErrorMessage={clearErrorMessage}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
        navigation={navigation}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;