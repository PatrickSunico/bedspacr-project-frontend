import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
// Get User from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
 user: user ? user : null,
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
   return await authService.register(user);
  } catch (error) {
   //  console.log(error);
   return thunkAPI.rejectWithValue("Error");
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
  },
 },
 extraReducers: (builder) => {
  builder
   .addCase(registerUser.pending, (state) => {
    // console.log("Fetching Details Pending");
    state.isLoading = true;
   })
   .addCase(registerUser.fulfilled, (state, { payload }) => {
    //    return {...state, }
    state.isLoading = false;
    state.isSuccess = true;
    state.user = payload;
   })
   .addCase(registerUser.rejected, (state, { payload }) => {
    console.log("Fetch Details Error");
    state.isLoading = false;
    state.isError = true;
    state.message = payload;
    state.user = null;
   });
 },
});

// export the action
export const { resetForm } = authSlice.actions;

// export reducer
export default authSlice.reducer;

// export the state that needs to be used
// export const authData = (state) => state.auth.auth;
