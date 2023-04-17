import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('users/signup', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk('/users/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
// При перезавантаженні сторінки провіряємо токен з локалХосту, якщо він є додаємо
// в шапку запиту token.set(persistedToken), і направляємо запит на сервер для
// для отримання прав на доступ до бекенду
export const fetchCurrentUsers = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    if(persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
        // return state;
    }
    token.set(persistedToken);
    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})