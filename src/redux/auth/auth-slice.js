import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUsers } from "./auth-operations";

 const handleRejected = (state, action) => {
   state.error = action.payload;
 };

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchCurrentUsers: false,
    error: null,
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
     }).addCase(register.rejected, handleRejected
      ).addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
     }).addCase(logIn.rejected, handleRejected
      ).addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
     }).addCase(logOut.rejected, handleRejected
      ).addCase(fetchCurrentUsers.pending, (state) => {
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