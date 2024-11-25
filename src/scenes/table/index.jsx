import { Box } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTable } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const TableMn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
   {
    Field: "soBan",
    headerName: "Số bàn",
   },

   {
    Field: "soChoNgoi",
    headerName: "Số chỗ ngồi",
   },
   {
    Field: "hinhAnh",
    headerName: "Số bàn",
   },

   {
    Field: "maKhuVuc",
    headerName: "Số chỗ ngồi",
   },
  ];

  return (
    <Box m="20px">
      <Header title="Table Manage" subtitle="List Table" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTable} 
        columns={columns}
        components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default TableMn;
