# 📝 QuizSystem - Hệ thống thi trắc nghiệm trực tuyến

[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

> 🎯 Hệ thống quản lý và thi trắc nghiệm trực tuyến, mô phỏng nền tảng Azota.vn

---

## 📌 Giới thiệu

**QuizSystem** là một hệ thống thi trắc nghiệm trực tuyến được xây dựng bằng HTML, CSS và JavaScript thuần, tích hợp Firebase làm backend. Hệ thống hỗ trợ đầy đủ các chức năng quản lý và thi cử, phù hợp cho cả giáo viên và học sinh.

### ✨ Điểm nổi bật

- 🔐 **Xác thực an toàn** với Firebase Authentication (Email + Google)
- 👨‍🏫 **Phân quyền người dùng** Giáo viên / Học sinh
- 📝 **Tạo đề thi linh hoạt** (tải file lên hoặc soạn thủ công)
- 📤 **Hỗ trợ nhiều định dạng file** (.docx, .txt, .pdf)
- 🧠 **Tự động nhận diện** câu hỏi và đáp án từ file
- 🎯 **Làm bài thi trắc nghiệm** với đồng hồ đếm ngược
- 📊 **Xem kết quả** và lịch sử làm bài chi tiết
- 📚 **Quản lý lớp học** và bài tập hiệu quả
- 📱 **Giao diện responsive** trên mọi thiết bị

---

## 🏗️ Cấu trúc dự án
📁 QuizSystem/
│
├── 📄 index.html # Trang đăng nhập / đăng ký
├── 📄 dashboard.html # Trang chủ (phân quyền theo role)
│
├── 📁 Học sinh (Student)/
│ ├── 📄 student-classes.html # Danh sách lớp học
│ ├── 📄 student-exams.html # Danh sách bài tập / đề thi
│ ├── 📄 exam-detail.html # Chi tiết đề thi trước khi làm
│ └── 📄 take-exam.html # Trang làm bài thi
│
├── 📁 Giáo viên (Teacher)/
│ ├── 📄 exams.html # Quản lý đề thi
│ ├── 📄 create-exam.html # Tạo đề thi mới (Upload + Soạn thủ công)
│ ├── 📄 create-manual.html # Soạn đề thủ công
│ ├── 📄 create-interactive.html # Tạo đề tương tác
│ ├── 📄 create-competency.html # Đề đánh giá năng lực
│ ├── 📄 create-matrix.html # Tạo đề từ ma trận
│ ├── 📄 create-excel.html # Import từ Excel
│ ├── 📄 classes.html # Quản lý lớp học
│ └── 📄 questions.html # Ngân hàng câu hỏi
│
└── 📄 README.md # Tài liệu dự án

---

## 🚀 Tính năng chi tiết

### 🔐 Xác thực (Authentication)

| Tính năng | Mô tả |
|-----------|-------|
| 📝 **Đăng ký** | Email + Mật khẩu, chọn vai trò (Giáo viên / Học sinh) |
| 🔑 **Đăng nhập** | Email + Mật khẩu hoặc Đăng nhập với Google |
| 🔒 **Phân quyền** | Hiển thị chức năng phù hợp với vai trò người dùng |
| 🚪 **Đăng xuất** | Đăng xuất an toàn |

### 👨‍🏫 Giáo viên (Teacher)

| Tính năng | Mô tả |
|-----------|-------|
| 📋 **Quản lý đề thi** | Xem danh sách, sửa, xóa đề thi |
| 📤 **Tạo đề thi** | Tải file (.docx, .txt, .pdf) hoặc soạn thủ công |
| 🧠 **Tự động nhận diện** | Tự động phát hiện câu hỏi + đáp án từ file |
| 📝 **Chuẩn hóa đề** | Tách đáp án trên cùng dòng thành từng dòng riêng |
| 📚 **Ngân hàng câu hỏi** | Quản lý tất cả câu hỏi trong hệ thống |
| 🏫 **Quản lý lớp** | Tạo và quản lý lớp học |
| ⏱️ **Cài đặt thời gian** | Thời gian làm bài, số lần được làm |

### 👨‍🎓 Học sinh (Student)

| Tính năng | Mô tả |
|-----------|-------|
| 📚 **Lớp học của tôi** | Xem danh sách lớp và bài tập được giao |
| 📝 **Bài tập / Đề thi** | Xem tất cả đề thi được giao |
| 📄 **Chi tiết đề thi** | Xem thông tin đề trước khi làm |
| 🎯 **Làm bài thi** | Giao diện làm bài trắc nghiệm, đếm giờ |
| 📊 **Xem kết quả** | Kết quả chi tiết sau khi nộp bài |
| 📜 **Lịch sử làm bài** | Xem các lần đã làm và điểm số |

---

## 📤 Tải file đề thi

Hệ thống hỗ trợ đọc và tự động nhận diện câu hỏi từ các định dạng:

| Định dạng | Hỗ trợ | Thư viện | Ghi chú |
|-----------|--------|----------|---------|
| `.txt` | ✅ | FileReader | Đọc trực tiếp |
| `.docx` | ✅ | Mammoth.js | Đọc nội dung Word |
| `.pdf` | ✅ | PDF.js | Đọc nội dung PDF |
| `.xlsx` | 🔜 | - | Đang phát triển |
| `.azt` | 🔜 | - | Đang phát triển |

### 🧠 Tự động nhận diện đáp án đúng

Hệ thống nhận diện đáp án đúng qua các dấu hiệu:

| Cách đánh dấu | Ví dụ | Độ ưu tiên |
|---------------|-------|------------|
| Dấu `*` | `*B. Đáp án B` | ⭐⭐⭐ |
| Chữ in đậm | `**B. Đáp án B**` hoặc `<b>B. Đáp án B</b>` | ⭐⭐⭐ |
| Gạch chân | `<u>B. Đáp án B</u>` | ⭐⭐⭐ |
| Màu đỏ | `<span style="color:red">B. Đáp án B</span>` | ⭐⭐⭐ |
| Dấu ngoặc | `(B) Đáp án B` | ⭐⭐ |
| Từ khóa | `B. đúng đáp án` | ⭐⭐ |
| Emoji | `✅ B. Đáp án B` | ⭐⭐ |
| Chữ thường | `b. Đáp án B` | ⭐ |

---

## 🔧 Cài đặt và triển khai

### 📋 Yêu cầu

- Trình duyệt hiện đại (Chrome, Edge, Firefox, Safari)
- Tài khoản Firebase (miễn phí)
- Kết nối Internet

### 🚀 Bước 1: Tạo Firebase Project

1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Nhấn **"Thêm dự án"** và đặt tên (ví dụ: `quizsystem`)
3. Tắt Google Analytics (hoặc bật tùy chọn)
4. Chờ dự án được tạo

### 🔐 Bước 2: Cấu hình Authentication

1. Vào **Authentication** → **Sign-in methods**
2. Bật **Email/Password**
3. Bật **Google** và cấu hình

### 🗄️ Bước 3: Cấu hình Firestore Database

1. Vào **Firestore Database** → **Tạo database**
2. Chọn **"Bắt đầu ở chế độ test"**
3. Vào **Rules** và paste rule sau:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
