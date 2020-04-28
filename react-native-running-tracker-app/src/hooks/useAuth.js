import { useEffect, useReducer } from 'react'
import { AsyncStorage } from 'react-native';

import axios from '../api/axios';


const initialState = {
  token: null,
  errorMessage: ''
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const useAuth = (navigate) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    tryLocalSignin()
  }, [])

  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: 'signin', payload: token });
    }
  };

  const clearErrorMessage = _ => {
    dispatch({ type: 'clear_error_message' });
  };

  const signup = async ({ email, password }) => {
    try {
      const response = await axios.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up'
      });
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await axios.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in'
      });
    }
  };

  const signout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
  };

  return {
    state,
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin
  }
}

export default useAuth



