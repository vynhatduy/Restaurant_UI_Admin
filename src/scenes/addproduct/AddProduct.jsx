import React, { useState } from "react";
import { Box, TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    cost: "",
    date: "", // Lưu tệp hình ảnh sau khi chọn
  });

  const [productList, setProductList] = useState([]); // Mảng lưu danh sách sản phẩm

  // Hàm xử lý thay đổi dữ liệu trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Hàm xử lý khi người dùng chọn file ảnh
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues({ ...formValues, date: file ? file.name : "" });
  };

  // Hàm xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Thêm sản phẩm vào danh sách
    setProductList([...productList, formValues]);
    // Reset form sau khi submit
    setFormValues({
      id: "",
      name: "",
      phone: "",
      email: "",
      cost: "",
      date: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "auto",
        padding: 3,
        backgroundColor: "#4B4376",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>
        Add Product
      </Typography>

      {/* Mã Món Ăn */}
      <TextField
        label="Mã Món Ăn"
        name="id"
        value={formValues.id}
        onChange={handleInputChange}
        required
      />

      {/* Tên Món Ăn */}
      <TextField
        label="Tên Món Ăn"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />

      {/* Giá */}
      <TextField
        label="Giá (VNĐ)"
        name="phone"
        value={formValues.phone}
        onChange={handleInputChange}
        type="number"
        required
      />

      {/* Mô Tả */}
      <TextField
        label="Mô Tả"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        multiline
        rows={4}
        required
      />

      {/* Mã Nhóm Món Ăn */}
      <TextField
        label="Mã Nhóm Món Ăn"
        name="cost"
        value={formValues.cost}
        onChange={handleInputChange}
        required
      />

      {/* Hình Ảnh */}
      <TextField
                type="file"
                name="date"
                value={formValues.date}
                onChange={handleInputChange}
                required
                inputProps={{
                    accept: "image/*", // Chỉ cho phép tệp ảnh
                    multiple: true,    // Cho phép chọn nhiều tệp
                }}
            />

      {/* Nút Submit */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        Thêm Món Ăn
      </Button>

      {/* Hiển thị danh sách sản phẩm đã thêm */}
      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã Món Ăn</TableCell>
              <TableCell>Tên Món Ăn</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell>Mô Tả</TableCell>
              <TableCell>Mã Nhóm Món Ăn</TableCell>
              <TableCell>Hình Ảnh</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.phone}</TableCell>
                <TableCell>{product.email}</TableCell>
                <TableCell>{product.cost}</TableCell>
                <TableCell>{product.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AddProduct;
