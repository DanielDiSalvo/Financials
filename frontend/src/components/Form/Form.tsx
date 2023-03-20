import React, { useState, useEffect } from "react";
import { Box, Button, InputLabel, MenuItem, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFinancial } from "../../redux/features/financial/financialSlice";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import type { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { AppDispatch } from "../../redux/store/store";
import {
  fetchAccounts,
  deleteAccounts,
} from "../../redux/features/accounts/fetchAccounts";
import {
  fetchBusiness,
  deleteBusiness,
} from "../../redux/features/business/fetchBusiness";

import * as XLSX from "xlsx";

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [request, setRequest] = useState("");
  const [disabled, setDisabled] = useState(true);

  const accountsData = useSelector(
    (state: RootState) => state.fetchAccounts.accounts
  );

  const businessData = useSelector(
    (state: RootState) => state.fetchBusinnes.business
  );

  const financial = useSelector(
    (state: RootState) => state.financial.financial
  );

  const handleDownloadAccountsData = () => {
    const workSheet = XLSX.utils.json_to_sheet(accountsData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    // Binary String
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    // Download
    XLSX.writeFile(workBook, "FinancialData.xlsx");
  };

  const handleDownloadBusinessData = () => {
    const workSheet = XLSX.utils.json_to_sheet(businessData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "financialData");
    // Binary String
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    // Download
    XLSX.writeFile(workBook, "FinancialData.xlsx");
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRequest(event.target.value);
    console.log(event.target.value);
  };

  const onSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (request === "acc") {
      dispatch(fetchAccounts());
      dispatch(deleteBusiness());
      setDisabled(false);
    }
    if (request === "bus") {
      dispatch(fetchBusiness());
      dispatch(deleteAccounts());
      setDisabled(false);
    }
    return;
  };

  useEffect(() => {
    if (request === "acc") {
      dispatch(setFinancial("Account"));
    }
    if (request === "bus") {
      dispatch(setFinancial("Business"));
    }
  }, [dispatch, request]);

  return (
    <Box sx={styles.container}>
      <form onSubmit={onSubmit}>
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Financials</InputLabel>
          <Select value={request} label="Financials" onChange={handleChange}>
            <MenuItem value={"acc"}>Accounts</MenuItem>
            <MenuItem value={"bus"}>Business Units</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" sx={styles.submitBtn}>
          Submit
        </Button>

        {financial === "Account" || !financial ? (
          <Button
            startIcon={<CloudDownloadIcon />}
            onClick={handleDownloadAccountsData}
            disabled={disabled}
            variant="contained"
            type="submit"
            sx={styles.downloadBtn}
          >
            Download Data
          </Button>
        ) : null}

        {financial === "Business" ? (
          <Button
            startIcon={<CloudDownloadIcon />}
            onClick={handleDownloadBusinessData}
            disabled={disabled}
            variant="contained"
            type="submit"
            sx={styles.downloadBtn}
          >
            Download Data
          </Button>
        ) : null}
      </form>
    </Box>
  );
};

export default Form;
