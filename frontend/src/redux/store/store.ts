import { configureStore } from "@reduxjs/toolkit";
import financialSlice from "../features/financial/financialSlice";
import fetchAccountsSlice from "../features/accounts/fetchAccounts";
import fetchBusinessSlice from "../features/business/fetchBusiness";

export const store = configureStore({
  reducer: {
    financial: financialSlice,
    fetchAccounts: fetchAccountsSlice,
    fetchBusinnes: fetchBusinessSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
