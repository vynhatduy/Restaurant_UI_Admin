import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import axios from "axios";
import { tokens } from "../../theme";

const Menu = () => {
  const theme = useTheme();
  const [rows, setRows] = useState([]);
  const colors = tokens(theme.palette.mode);

  // Fetch dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://103.153.68.148/api/MonAn/all/food"); // Đổi URL API theo đúng endpoint
        const data = response.data.map((item, index) => ({
          id: index + 1, // ID dùng cho DataGrid
          maMonAn: item.maMonAn,
          tenMon: item.tenMon,
          gia: item.gia,
          moTa: item.moTa,
          hinhAnh: item.hinhAnh.split(";"), // Chia các URL hình ảnh thành mảng
          maNhomMonAn:
            item.maNhomMonAn === "NMA001"
              ? "Bữa sáng"
              : item.maNhomMonAn === "NMA002"
              ? "Bữa trưa"
              : "Bữa tối",
        }));
        setRows(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: "maMonAn",
      headerName: "Mã Món Ăn",
      flex: 1,
      sortable: true,
    },
    {
      field: "tenMon",
      headerName: "Tên Món Ăn",
      flex: 1,
      sortable: true,
    },
    {
      field: "gia",
      headerName: "Giá (đ)",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>{params.row.gia} đ</Typography>
      ),
      sortable: true,
    },
    {
      field: "moTa",
      headerName: "Mô Tả",
      flex: 1,
      sortable: true,
    },
    {
      field: "maNhomMonAn",
      headerName: "Loại Món Ăn",
      flex: 1,
    },
    {
      field: "hinhAnh",
      headerName: "Hình Ảnh",
      flex: 2,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          {params.row.hinhAnh.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Ảnh ${params.row.tenMon}`}
              style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "5px" }}
            />
          ))}
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Menu" subtitle="Danh sách món ăn của ManchilGarden" />
        <Button
          component={Link}
          to="/AddProduct"
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Thêm Món Ăn
        </Button>
      </Box>

      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
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
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default Menu;
