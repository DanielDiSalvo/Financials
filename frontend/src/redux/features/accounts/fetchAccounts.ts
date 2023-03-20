import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "../../../models/Accounts/Account";

export const fetchAccounts = createAsyncThunk("fetchAccounts/api", async () => {
  const response = await fetch(`${process.env.REACT_APP_ACCOUNTS_URL}`);
  const formattedResponse = await response.json();
  return formattedResponse;
});

interface FetchAccountsState {
  accounts: Account[];
  isLoading: boolean;
  error: boolean;
}

const initialState: FetchAccountsState = {
  accounts: [],
  isLoading: false,
  error: false,
};

export const fetchAccountsSlice = createSlice({
  name: "fetchAccountsSlice",
  initialState,
  reducers: {
    deleteAccounts: (state) => {
      state.accounts = [];
    },
  },
  extraReducers: {
    [fetchAccounts.pending.toString()]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchAccounts.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.accounts = action.payload;
    },
    [fetchAccounts.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { deleteAccounts } = fetchAccountsSlice.actions;

export default fetchAccountsSlice.reducer;
