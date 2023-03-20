import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  financial: string;
}

const initialState: CounterState = {
  financial: "",
};

export const financialSlice = createSlice({
  name: "financial",
  initialState,
  reducers: {
    setFinancial: (state, action: PayloadAction<string>) => {
      state.financial = action.payload;
    },
  },
});

export const { setFinancial } = financialSlice.actions;

export default financialSlice.reducer;
