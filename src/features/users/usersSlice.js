import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
  { id: "0", name: "Dude Lebowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Gray" },
];
const POSTS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUserId = createAsyncThunk("fetchUserId/userId", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserId.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
