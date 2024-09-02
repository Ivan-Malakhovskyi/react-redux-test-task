import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./operations";
import { UserState } from "../../../types";

export const initialState: UserState = {
  users: [],
  isLoading: false,
  isError: null,
};

const handlePending = (state: UserState) => {
  state.isLoading = true;
  state.isError = null;
};

// const handleRejected = (state: UserState, action: PayloadAction<string>) => {
//   if (action.payload) {
//     state.isError = action.payload;
//   }
//   state.isLoading = false;
// };

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action) {
      state.users.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, handlePending);
    // builder.addCase(fetchAllUsers.rejected, handleRejected);
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isError = null;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { createUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
