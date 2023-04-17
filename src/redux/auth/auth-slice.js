import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUsers } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchCurrentUsers: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: auth =>
    auth
      .addCase(register.fulfilled, (state, action) => {
       state.user = action.payload.user;
       state.token = action.payload.token;
       state.isLoggedIn = true;
    }).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
     }).addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
     }).addCase(fetchCurrentUsers.pending, (state) => {
        state.isFetchCurrentUsers = true;
     }).addCase(fetchCurrentUsers.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchCurrentUsers = false;
     }).addCase(fetchCurrentUsers.rejected, (state) => {
        state.isFetchCurrentUsers = false;
   })
    
    
})

export const authReducer = authSlice.reducer;