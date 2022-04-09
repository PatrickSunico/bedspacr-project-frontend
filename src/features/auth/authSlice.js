import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
// Get User from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
 user: user ? user : null,
 isAuthenticated: false,
 isError: false,
 isSuccess: false,
 isLoading: false,
 message: "",
};

// Register User & createAsyncThunk Function handle it in extra reducers
export const registerUser = createAsyncThunk(
 "auth/register",
 async (user, thunkAPI) => {
  try {
   const response = await authService.register(user);
   return response;
  } catch (error) {
   const message =
    (error.response &&
     error.response.data &&
     error.response.data.message &&
     error.data.message) ||
    error.message ||
    error.data.message ||
    error.toString();

   return thunkAPI.rejectWithValue(message);
  }
 }
);
// Login User & createAsyncThunk Function handle it in extra reducers
export const loginUser = createAsyncThunk(
 "auth/login",
 async (user, thunkAPI) => {
  try {
   const response = await authService.login(user);
   return response;
  } catch (error) {
   const message =
    (error.response &&
     error.response.data &&
     error.response.data.message &&
     error.data.message) ||
    error.message ||
    error.data.message ||
    error.toString();

   return thunkAPI.rejectWithValue(message);
  }
 }
);

// Login User Slice
export const authSlice = createSlice({
 name: "auth",
 initialState,
 reducers: {
  // reset is a predefined function to reset state to default values
  resetForm: (state) => {
   state.isLoading = false;
   state.isError = false;
   state.isSuccess = false;
   state.message = "";
   state.isAuthenticated = false;
  },
 },
 extraReducers: (builder) => {
  builder
   // register builders
   .addCase(registerUser.pending, (state) => {
    state.isLoading = true;
   })
   .addCase(registerUser.fulfilled, (state, { payload }) => {
    //    return {...state, }
    state.isLoading = false;
    state.isSuccess = true;
    state.user = payload;
    state.isAuthenticated = true;
   })
   .addCase(registerUser.rejected, (state, { payload }) => {
    state.isLoading = false;
    state.isError = true;
    state.message = payload;
    state.user = null;
    state.isAuthenticated = false;
   })

   // login builders
   .addCase(loginUser.pending, (state) => {
    state.isLoading = true;
   })
   .addCase(loginUser.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.user = action.payload;
    state.isAuthenticated = true;
   })
   .addCase(loginUser.rejected, (state, action) => {
    state.isLoading = false;
    state.isError = true;
    state.message = action.payload;
    state.user = null;
    state.isAuthenticated = false;
   });
 },
});

// export the action
export const { resetForm } = authSlice.actions;

// export reducer
export default authSlice.reducer;

// export the state that needs to be used
export const authData = (state) => state.auth;
