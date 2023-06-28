import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contactData);
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data          
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
  )

  export const clearContacts = createAsyncThunk(
    "contacts/clearContacts",
    async () => {
        return;
    }
  );