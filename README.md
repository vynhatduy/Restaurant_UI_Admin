# React Admin Dashboard

# npm i
# npm run build
# npm install -g serve
#  serve -s build

## Danh sách các câu lệnh để thực thi với file Dockerfile:
1. Build Docker Image
Tạo một Docker image từ Dockerfile:`docker build -t restaurant_admin_ui .`
- -t: Gán tên cho Docker image (ở đây là restaurant_admin_ui).
- .: Chỉ định ngữ cảnh build, trong trường hợp này là thư mục hiện tại.
2. Kiểm tra Docker Image đã tạo
Liệt kê tất cả các Docker images hiện có:`docker images`
3. Chạy Docker Container
Khởi chạy một container từ image vừa tạo:`docker run -p 3000:3000 restaurant_admin_ui`
- -p 3000:3000: Liên kết cổng 3000 trên máy host với cổng 3000 trong container.
- restaurant_admin_ui: Tên image được sử dụng để chạy.
4. Liệt kê các Container đang chạy
Xem danh sách các container đang hoạt động:`docker ps`
Xem toàn bộ container (kể cả đã dừng):`docker ps -a`
5. Dừng Container
Dừng một container đang chạy:`docker stop <CONTAINER_ID>`
- <CONTAINER_ID>: ID hoặc tên của container (lấy từ lệnh docker ps).
6. Xóa Container
Xóa container không còn cần thiết:`docker rm <CONTAINER_ID>`
7. Xóa Docker Image
Xóa Docker image nếu không cần:`docker rmi restaurant_admin_ui`
8. Sử dụng Docker Compose (Nếu có)
Nếu đã tạo file docker-compose.yml, bạn có thể thực thi các lệnh sau:

- Build và khởi chạy container:`docker-compose up --build`
- Chạy container (không build lại):`docker-compose up`
- Dừng các container đang chạy:`docker-compose down`
9. Debug hoặc Kiểm tra Log
Xem log của container:`docker logs <CONTAINER_ID>`
Mở terminal bên trong container để kiểm tra:`docker exec -it <CONTAINER_ID> /bin/bash`
10. Dọn dẹp hệ thống Docker
Xóa tất cả các container đã dừng:`docker container prune`
Xóa tất cả Docker images không dùng:`docker image prune -a`