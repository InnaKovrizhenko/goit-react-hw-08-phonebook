import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
      try {
          const response = await axios.post('/users/signup', userData);
          setToken(response.data.token)
          return response.data  
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
  }
)

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
      try {
          const response = await axios.post('/users/logIn', userData);
          setToken(response.data.token)
          return response.data  
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
  }
)

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
      try {
          await axios.post('/users/logOut');
          clearToken()
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
  }
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
      if (persistedToken === null) {
      return thunkAPI.rejectWithValue('no token');
    }
    setToken(persistedToken)
      try {
          const response = await axios.get('/users/current');
          return response.data  
      } catch (error) {
          return thunkAPI.rejectWithValue(error);
      }
  }
)

