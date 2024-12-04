# Sử dụng Node.js image
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package*.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Cấp quyền truy cập vào cổng 3000 (thường được sử dụng cho ứng dụng Node.js)
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
