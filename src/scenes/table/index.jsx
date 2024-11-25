import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const TableMn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State lưu dữ liệu từ API
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Gọi API lấy dữ liệu
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://103.153.68.148/api/Ban/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setRows(data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchData();
  }, []);

  // Định nghĩa cột
  const columns = [
    {
      field: "soBan",
      headerName: "Số Bàn",
      flex: 1,
    },
    {
      field: "soChoNgoi",
      headerName: "Số Chỗ Ngồi",
      flex: 1,
    },
    {
      field: "hinhAnh",
      headerName: "Hình Ảnh",
      flex: 2,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Hình bàn"
          style={{ width: "50px", height: "50px", borderRadius: "5px" }}
        />
      ),
    },
    {
      field: "maKhuVuc",
      headerName: "Mã Khu Vực",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Table Manage" subtitle="Danh sách bàn" />
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
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          getRowId={(row) => row.maBan} // Đặt ID cho từng hàng
        />
      </Box>
    </Box>
  );
};

export default TableMn;
