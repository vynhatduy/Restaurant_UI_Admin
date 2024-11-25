import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    groupId: "",
    images: [],
  });

  const [productList, setProductList] = useState([]);

  // Hàm xử lý thay đổi dữ liệu trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Hàm xử lý khi chọn file
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormValues({ ...formValues, images: files });
  };

  // Hàm xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, formValues]);
    setFormValues({
      id: "",
      name: "",
      price: "",
      description: "",
      groupId: "",
      images: [],
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

      <TextField
        label="Mã Món Ăn"
        name="id"
        value={formValues.id}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Tên Món Ăn"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Giá (VNĐ)"
        name="price"
        value={formValues.price}
        onChange={handleInputChange}
        type="number"
        required
      />
      <TextField
        label="Mô Tả"
        name="description"
        value={formValues.description}
        onChange={handleInputChange}
        multiline
        rows={4}
        required
      />
      <TextField
        label="Mã Nhóm Món Ăn"
        name="groupId"
        value={formValues.groupId}
        onChange={handleInputChange}
        required
      />
      <input
        type="file"
        name="images"
        multiple
        onChange={handleFileChange}
        accept="image/*"
        style={{ marginTop: 10 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        Thêm Món Ăn
      </Button>

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
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.groupId}</TableCell>
                <TableCell>
                  {product.images.map((file, idx) => (
                    <Typography key={idx}>{file.name}</Typography>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AddProduct;
