import React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid as DataGridMUI,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { AccountsMockData } from "../../mocks/Accounts/Accounts";
import { Business } from "../../models/Business/Business";
import { styles } from "./styles";

export interface IDataGridBusinessProps {
  data: Business[];
}

const DataGridBusiness: React.FC<IDataGridBusinessProps> = ({ data }) => {
  const date = new Date();

  const columns: GridColDef[] = [
    {
      field: "business",
      headerName: "Business",
      width: 150,
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 100,
    },
    {
      field: "year",
      headerName: "Year",
      width: 100,
      valueGetter: (params: GridValueGetterParams) => date.getFullYear(),
    },
    {
      field: "scenario",
      headerName: "Scenario",
      sortable: false,
      width: 100,
    },
    {
      field: "jan",
      headerName: "Jan",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.jan ? `$${params.row.jan}` : null),
    },
    {
      field: "feb",
      headerName: "Feb",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.feb ? `$${params.row.feb}` : null),
    },
    {
      field: "mar",
      headerName: "Mar",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.mar ? `$${params.row.mar}` : null),
    },
    {
      field: "apr",
      headerName: "Apr",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.apr ? `$${params.row.apr}` : null),
    },
    {
      field: "may",
      headerName: "May",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.may ? `$${params.row.may}` : null),
    },
    {
      field: "jun",
      headerName: "Jun",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.jun ? `$${params.row.jun}` : null),
    },
    {
      field: "jul",
      headerName: "Jul",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.jul ? `$${params.row.jul}` : null),
    },
    {
      field: "aug",
      headerName: "Aug",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.aug ? `$${params.row.aug}` : null),
    },
    {
      field: "sep",
      headerName: "Sep",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.sep ? `$${params.row.sep}` : null),
    },
    {
      field: "oct",
      headerName: "Oct",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.oct ? `$${params.row.oct}` : null),
    },
    {
      field: "nov",
      headerName: "Nov",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.nov ? `$${params.row.nov}` : null),
    },
    {
      field: "dec",
      headerName: "Dec",
      sortable: false,
      width: 100,
      renderCell: (params) => (params.row?.dec ? `$${params.row.dec}` : null),
    },
  ];

  const rows = data ? data : AccountsMockData;

  return (
    <Box sx={styles.container}>
      <DataGridMUI
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );
};

export default DataGridBusiness;
