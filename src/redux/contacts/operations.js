import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://643327783e05ff8b37361a24.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
    ;
});

export const addContact = createAsyncThunk("contacts/addContacts",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const deleteContact = createAsyncThunk("contacts/deleteContacts",
    async (contactId, thunkAPI) => {
        try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
        } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        }
    }
);

