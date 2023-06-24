import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// регистрируется новый пользователь
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
  }
});
// пользователь логинится
const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const { data } = await axios.post('/users/logIn', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
  }
});

// пользователь вышел из своего аккаунта
const logOut = createAsyncThunk('auth/logOut', async credentials => {
  try {
    const { data } = await axios.post('/users/logOut', credentials);
    token.unset();
    return data;
  } catch (error) {}
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (persistedToken === null) {
      console.log('no token');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
    }
  }
);
const authOperations = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
};

export default authOperations;