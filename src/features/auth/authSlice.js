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

// Register User
export const registerUser = createAsyncThunk(
 "auth/register",
 async (user, thunkAPI) => {
  try {
   return await authService.register(user);
  } catch (error) {
   console.log(error);
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
 extraReducers: {
  [registerUser.pending]: () => {
   console.log("Fetching User Object");
  },
 },
});

// export the action
export const { resetForm } = authSlice.actions;

// export reducer
export default authSlice.reducer;
