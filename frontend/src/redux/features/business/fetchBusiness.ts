import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Business } from "../../../models/Business/Business";

export const fetchBusiness = createAsyncThunk("fetchBusiness/api", async () => {
  const response = await fetch(`${process.env.REACT_APP_BUSINESS_URL}`);
  const formattedResponse = await response.json();
  return formattedResponse;
});

interface FetchBusinessState {
  business: Business[];
  isLoading: boolean;
  error: boolean;
}

const initialState: FetchBusinessState = {
  business: [],
  isLoading: false,
  error: false,
};

export const fetchBusinessSlice = createSlice({
  name: "fetchBusinessSlice",
  initialState,
  reducers: {
    deleteBusiness: (state) => {
      state.business = [];
    },
  },
  extraReducers: {
    [fetchBusiness.pending.toString()]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchBusiness.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.business = action.payload;
    },
    [fetchBusiness.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { deleteBusiness } = fetchBusinessSlice.actions;

export default fetchBusinessSlice.reducer;
