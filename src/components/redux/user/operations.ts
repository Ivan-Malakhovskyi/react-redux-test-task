import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchAllUsers = createAsyncThunk(
  "fetchAllUsers",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/users");

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
